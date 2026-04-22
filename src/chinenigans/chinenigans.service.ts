import { Injectable } from '@nestjs/common';
import { CreateChineniganDto } from './dto/create-chinenigan.dto';
import { UpdateChineniganDto } from './dto/update-chinenigan.dto';

@Injectable()
export class ChinenigansService {
  create(createChineniganDto: CreateChineniganDto) {
    return 'This action adds a new chinenigan';
  }

  findAll() {
    return `This action returns all chinenigans`;
  }

  findOne(id: number) {
    return `This action returns a #${id} chinenigan`;
  }

  update(id: number, updateChineniganDto: UpdateChineniganDto) {
    return `This action updates a #${id} chinenigan`;
  }

  remove(id: number) {
    return `This action removes a #${id} chinenigan`;
  }
}
