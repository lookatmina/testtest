import {
  IsArray,
  IsDateString,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

export class PerformanceDto {
  @IsString()
  @IsNotEmpty({ message: '공연 이름을 입력해주세요' })
  title: string;

  @IsString()
  @IsNotEmpty({ message: '공연 내용을 입력해주세요.' })
  description: string;

  @IsArray()
  @IsDateString()
  @IsNotEmpty({ message: '공연 날짜 및 시간을 입력해주세요.' })
  date: Date[];

  @IsString()
  @IsNotEmpty({ message: '공연 장소를 입력해주세요.' })
  place: string;

  @IsArray()
  @IsString()
  @IsNotEmpty({ message: '좌석 정보를 입력해주세요.' })
  seat: string;

  @IsString()
  @IsNotEmpty({ message: '공연 이미지를 입력해주세요.' })
  image: string;

  @IsString()
  @IsNotEmpty({ message: '공연 카테고리를 입력해주세요.' })
  category: string;
}
