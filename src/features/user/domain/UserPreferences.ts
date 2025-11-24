export class UserPreferences {
  constructor(
    public id: string | null,
    public userId: string,
    public propertyTypes: string[],    
    public operationTypes: string[],   
    public provinces: string[],       
    public createdAt?: Date,
    public updatedAt?: Date
  ) {}
}