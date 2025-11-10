import multer from 'multer';
import { v2 as cloudinary } from 'cloudinary';
import { Readable } from 'stream';

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME || '',
    api_key: process.env.CLOUDINARY_API_KEY || '',
    api_secret: process.env.CLOUDINARY_API_SECRET || '',
});

export class ImageUploadService {
    private storage = multer.memoryStorage();

    private fileFilter = (req: Express.Request, file: Express.Multer.File, cb: multer.FileFilterCallback) => {
        const allowedTypes = ['image/jpeg', 'image/png', 'image/jpg', 'image/webp'];
        if (allowedTypes.includes(file.mimetype)) {
            cb(null, true);
        } else {
            cb(new Error('Invalid file type. Only JPEG, PNG, JPG, and WEBP are allowed.'));
        }
    };

    public upload = multer({
        storage: this.storage,
        fileFilter: this.fileFilter,
        limits: { fileSize: 5 * 1024 * 1024 },
    });

  
    async uploadImage(file: Express.Multer.File, folder: string = 'profile-images'): Promise<string> {
        return new Promise((resolve, reject) => {
            const uploadStream = cloudinary.uploader.upload_stream(
                {
                    folder: folder,
                    resource_type: 'image',
                    transformation: [
                        { width: 500, height: 500, crop: 'limit' },
                        { quality: 'auto' },
                        { fetch_format: 'auto' }
                    ]
                },
                (error, result) => {
                    if (error) {
                        reject(new Error(`Error uploading image to Cloudinary: ${error.message}`));
                    } else if (result) {
                        resolve(result.secure_url);
                    } else {
                        reject(new Error('Unknown error uploading image to Cloudinary'));
                    }
                }
            );

            const bufferStream = Readable.from(file.buffer);
            bufferStream.pipe(uploadStream);
        });
    }

    async deleteImage(imageUrl: string): Promise<boolean> {
        try {
            const publicId = this.extractPublicId(imageUrl);
            if (!publicId) {
                throw new Error('Invalid Cloudinary URL');
            }

            const result = await cloudinary.uploader.destroy(publicId);
            return result.result === 'ok';
        } catch (error: any) {
            throw new Error(`Error deleting image from Cloudinary: ${error.message}`);
        }
    }

    private extractPublicId(url: string): string | null {
        try {
            const urlParts = url.split('/');
            const uploadIndex = urlParts.indexOf('upload');
            if (uploadIndex === -1) return null;

            const pathParts = urlParts.slice(uploadIndex + 2); 
            const pathWithExtension = pathParts.join('/');
            
            const lastDotIndex = pathWithExtension.lastIndexOf('.');
            return pathWithExtension.substring(0, lastDotIndex);
        } catch (error) {
            return null;
        }
    }
}