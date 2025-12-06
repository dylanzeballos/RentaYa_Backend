export interface OwnerStats {
    totalProperties: number;
    rentedCount: number;
    anticreticoCount: number;
    estimatedIncome: number; // sum of report.totalPrice for owner's properties
    averageRating: number | null; // null when there are no reviews
    totalReviews: number;
}
