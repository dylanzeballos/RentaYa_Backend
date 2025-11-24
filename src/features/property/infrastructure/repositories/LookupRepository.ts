import prisma from '@/config/prisma';

export class LookupRepository {
    async getOperationTypes(): Promise<any[]> {
        return await prisma.operationType.findMany({ orderBy: { name: 'asc' } });
    }


    async getPropertyTypes(): Promise<any[]> {
        return await prisma.propertyType.findMany({ orderBy: { name: 'asc' } });
    }

    async getProvinces(): Promise<any[]> {
        return await prisma.province.findMany({ orderBy: { name: 'asc' } });
    }


}