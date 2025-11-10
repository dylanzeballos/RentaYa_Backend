import { Router } from 'express';
import { ReviewController } from '../controllers/ReviewController';
import { validateCreateReview } from '../validation/review.validation';
import { authMiddleware } from "@/shared/infrastructure/middleware/AuthMiddleware";

const router = Router();
const reviewController = new ReviewController();

router.post('/', authMiddleware.authenticate, validateCreateReview, reviewController.createReview);
router.get('/user/:userId', authMiddleware.authenticate, reviewController.getReviewsByUser);
router.get('/property/:propertyId', authMiddleware.authenticate, reviewController.getReviewsByProperty);

export default router;
