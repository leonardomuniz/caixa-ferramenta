import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode } from '@nestjs/common';
import { ChinenigansService } from './chinenigans.service';
import { CreateChineniganDto } from './dto/create-chinenigan.dto';
import { UpdateChineniganDto } from './dto/update-chinenigan.dto';

@Controller('chinenigans')
export class ChinenigansController {
  constructor(private readonly chinenigansService: ChinenigansService) { }

  @Post()
  create(@Body() createChineniganDto: CreateChineniganDto) {
    return this.chinenigansService.create(createChineniganDto);
  }

  @Get()
  @HttpCode(200)
  findAll() {
    const response = this.chinenigansService.findAll();
    return {
      payload: response,
      message: 'Find all handled successfully'
    };
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.chinenigansService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateChineniganDto: UpdateChineniganDto) {
    return this.chinenigansService.update(+id, updateChineniganDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.chinenigansService.remove(+id);
  }
}
