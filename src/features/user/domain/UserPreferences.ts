export class UserPreferences {
  constructor(
    public id: string,
    public userId: string,
    public propertyTypes: string[],
    public modality: string | null,
    public locations: string[],
    public createdAt: Date,
    public updatedAt: Date
  ) {}
}
