import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PerformanceDto } from './dto/performance.dto';
import { Performance } from './entities/performance.entity';

@Injectable()
export class PerformanceService {
  constructor(
    @InjectRepository(Performance)
    private readonly performanceRepository: Repository<Performance>,
  ) {}

  // 전체 조회
  async findAll(): Promise<Performance[]> {
    return await this.performanceRepository.find();
  }

  // 공연명 조회
  async findByTitle(title: string): Promise<Performance[]> {
    return await this.performanceRepository.find({ where: { title } });
  }

  // 공연상세보기
  async findOne(id: number): Promise<Performance> {
    return await this.performanceRepository.findOne({ where: { id } });
  }

  // 공연명으로 검색
  async SearchTitle(title: string) {
    return await this.performanceRepository.find({ where: { title } });
  }

  async create(
    title: string,
    description: string,
    date: Date[],
    place: string,
    seat: string,
    image: string,
    category: string,
  ) {
    const createdperformance = await this.performanceRepository.save({
      title: title,
      description: description,
      date: date,
      place: place,
      seat: seat,
      image: image,
      category: category,
    });

    return createdperformance;
  }
}
