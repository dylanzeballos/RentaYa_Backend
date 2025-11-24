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
        const availableCount = properties.filter((p: any) => p.status === 'disponible').length;
        const rentedCount = properties.filter((p: any) => p.status === 'rentado').length;
        const anticreticoCount = properties.filter((p: any) => p.operationTypeId && p.operationTypeId === 'anticretico').length;

        // Sum up report.totalPrice (Prisma Decimal) where present
        const estimatedIncome = properties.reduce((sum: number, p: any) => {
            const propSum = (p.reports || []).reduce((rsum: number, r: any) => {
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

    async getReportsByOwner(ownerId: string) {
        // Find all reports for properties that belong to the owner.
        // We include property with relations and user to provide context in the API.
        const reports = await prisma.report.findMany({
            where: {
                property: {
                    ownerId,
                },
            },
            include: {
                property: {
                    include: {
                        operationType: {
                            select: {
                                id: true,
                                name: true,
                            },
                        },
                        propertyType: {
                            select: {
                                id: true,
                                name: true,
                            },
                        },
                        province: {
                            select: {
                                id: true,
                                name: true,
                            },
                        },
                        reviews: {
                            select: {
                                rating: true,
                            },
                        },
                    },
                },
                user: {
                    select: {
                        id: true,
                        email: true,
                        fullName: true,
                        profilePhoto: true,
                    },
                },
            },
            orderBy: { createdAt: 'desc' },
        });

        // Calculate average rating for each property
        const reportsWithRating = reports.map((report: any) => {
            const reviews = report.property.reviews || [];
            const avgRating = reviews.length > 0
                ? reviews.reduce((sum: number, r: any) => sum + (r.rating || 0), 0) / reviews.length
                : null;
            
            return {
                ...report,
                property: {
                    ...report.property,
                    averageRating: avgRating,
                },
            };
        });

        return reportsWithRating;
    }
}
