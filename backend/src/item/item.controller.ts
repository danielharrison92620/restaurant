import { Body, Controller, Inject, Post, Get, Param } from '@nestjs/common';
import { TYPES } from './../application/constants/types';
import { Result } from './../domain/result/result';
import { CreateItemDTO } from './create-item-schema';
import { ITemResponseDTO } from './item-response.dto';
import { IItemService } from './item-service.interface';
import { Types } from 'mongoose';
@Controller('items')
export class ItemController {
  constructor(@Inject(TYPES.IItemService) private readonly itemService: IItemService) {}

  @Post()
  async createItem(@Body() request: CreateItemDTO): Promise<Result<ITemResponseDTO>> {
    return await this.itemService.createItem(request);
  }

  @Get()
  async getItems(): Promise<Result<ITemResponseDTO[]>> {
    return await this.itemService.getItems();
  }

  @Get('/:id')
  async getItemById(@Param('id') itemId: Types.ObjectId): Promise<Result<ITemResponseDTO>> {
    return await this.itemService.getItemById(itemId);
  }
}
