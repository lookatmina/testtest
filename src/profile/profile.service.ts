import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';
import { UserService } from 'src/user/user.service';
import { UserInfo } from 'src/utils/userInfo.decorator';
import { Repository } from 'typeorm';

@Injectable()
export class ProfileService {
  async findProfileId(user: User): Promise<any> {
    if (!user) {
      throw new NotFoundException('존재하지 않는 이메일입니다.');
    }
    return { nickname: user.nickname, points: user.points };
  }
}
