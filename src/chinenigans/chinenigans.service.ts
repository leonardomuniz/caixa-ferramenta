import { Inject, Injectable, Logger } from '@nestjs/common';
import { CreateChineniganDto } from './dto/create-chinenigan.dto';
import { UpdateChineniganDto } from './dto/update-chinenigan.dto';
import { Cache, CACHE_MANAGER } from '@nestjs/cache-manager';

@Injectable()
export class ChinenigansService {
  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) { }

  create(createChineniganDto: CreateChineniganDto) {
    return 'This action adds a new chinenigan';
  }

  async findAll() {
    const cachedValue = await this.cacheManager.get('chinenigans-find-all')
    if (cachedValue) {
      Logger.debug('Cache definido e retornando')
      return cachedValue
    }
    Logger.debug('Cache não definido, definindo')

    await this.cacheManager.set('chinenigans-find-all', `This action returns all chinenigans`)
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
