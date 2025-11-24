import { RequestHandler } from 'express';
import { ListOperationTypesUseCase } from '../../application/usecases/ListOperationTypesUseCase';
import { ListPropertyTypesUseCase } from '../../application/usecases/ListPropertyTypesUseCase';
import { ListProvincesUseCase } from '../../application/usecases/ListProvinceUseCase';
import { asyncHandler } from '@/shared/infrastructure/utils/asyncHandler';
import { ApiResponse } from '@/shared/infrastructure/utils/ApiResponse';

export class CatalogsController {
  constructor(
    private listOperationTypesUseCase: ListOperationTypesUseCase,
    private listPropertyTypesUseCase: ListPropertyTypesUseCase,
    private listProvincesUseCase: ListProvincesUseCase,
  ) {}

  getOperationTypes: RequestHandler = asyncHandler(async (req, res) => {
    const data = await this.listOperationTypesUseCase.execute();
    res.status(200).json(ApiResponse.success(data));
  });

  getPropertyTypes: RequestHandler = asyncHandler(async (req, res) => {
    const data = await this.listPropertyTypesUseCase.execute();
    res.status(200).json(ApiResponse.success(data));
  });

  getProvinces: RequestHandler = asyncHandler(async (req, res) => {
    const data = await this.listProvincesUseCase.execute();
    res.status(200).json(ApiResponse.success(data));
  });
}
