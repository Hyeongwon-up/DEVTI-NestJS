import { Injectable } from '@nestjs/common';
import { CreateDevtiDto } from './dto/create-devti.dto';
import { UpdateDevtiDto } from './dto/update-devti.dto';

@Injectable()
export class DevtiService {
  create(createDevtiDto: CreateDevtiDto) {
    return 'This action adds a new devti';
  }

  findAll() {
    return `This action returns all devti`;
  }

  findOne(id: number) {
    return `This action returns a #${id} devti`;
  }

  update(id: number, updateDevtiDto: UpdateDevtiDto) {
    return `This action updates a #${id} devti`;
  }

  remove(id: number) {
    return `This action removes a #${id} devti`;
  }
}
