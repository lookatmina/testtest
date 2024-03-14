import {
  Body,
  Controller,
  Get,
  NestInterceptor,
  Param,
  Post,
  Query,
  Type,
  UploadedFile,
  UseGuards,
} from '@nestjs/common';
import { RolesGuard } from 'src/auth/roles.guard';
import { PerformanceService } from './performance.service';
import { Roles } from 'src/auth/roles.decorator';
import { Role } from 'src/user/types/userRole.type';
import { FileInterceptor } from '@nestjs/platform-express';
import { PerformanceDto } from './dto/performance.dto';
import { title } from 'process';

@UseGuards(RolesGuard)
@Controller('performance')
export class PerformanceController {
  constructor(private readonly performanceService: PerformanceService) {}

  @Get()
  async findAll(@Query('title') title?: string) {
    if (title) {
      return await this.performanceService.findByTitle(title);
    }
    return await this.performanceService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return await this.performanceService.findOne(id);
  }

  @Get()
  async SearchTitle(@Query('title') title: string) {
    return await this.performanceService.SearchTitle(title);
  }

  @Roles(Role.Admin)
  @Post()
  async create(@Body() performanceDto: PerformanceDto) {
    return await this.performanceService.create(
      performanceDto.title,
      performanceDto.description,
      performanceDto.date,
      performanceDto.place,
      performanceDto.seat,
      performanceDto.image,
      performanceDto.category,
    );
  }
}
