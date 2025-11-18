import prisma from "@/config/prisma";
import { OwnerStats } from "../../domain/OwnerStats";

export class OwnerRepository {
    async getByOwner(ownerId: string): Promise<OwnerStats | null> {
        // Fetch properties owned by user, include reports and reviews
        const properties = await prisma.property.findMany({
            where: { ownerId },
            include: {
                reports: true,
                reviews: true,
            },
        });

        if (!properties || properties.length === 0) return null;

        const totalProperties = properties.length;
        const availableCount = properties.filter(p => p.status === 'disponible').length;
        const rentedCount = properties.filter(p => p.status === 'rentado').length;
        const anticreticoCount = properties.filter(p => p.operationType === 'anticretico').length;

        // Sum up report.totalPrice (Prisma Decimal) where present
        const estimatedIncome = properties.reduce((sum, p) => {
            const propSum = (p.reports || []).reduce((rsum, r) => {
                const val = r.totalPrice ? Number(r.totalPrice) : 0;
                return rsum + val;
            }, 0);
            return sum + propSum;
        }, 0);

        // Aggregate reviews to compute average rating
        let totalReviews = 0;
        let ratingSum = 0;
        for (const p of properties) {
            const reviews = p.reviews || [];
            totalReviews += reviews.length;
            for (const rev of reviews) {
                ratingSum += (rev.rating ?? 0);
            }
        }
        const averageRating = totalReviews > 0 ? +(ratingSum / totalReviews) : null;

        return {
            totalProperties,
            availableCount,
            rentedCount,
            anticreticoCount,
            estimatedIncome,
            averageRating,
            totalReviews,
        };
    }
}
