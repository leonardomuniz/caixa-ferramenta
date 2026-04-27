import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ChinenigansService } from './chinenigans.service';
import { CreateChineniganDto } from './dto/create-chinenigan.dto';
import { UpdateChineniganDto } from './dto/update-chinenigan.dto';
import {
  ApiCreatedAppResponse,
  ApiOkAppResponse,
} from 'src/config/SwaggerResponse.decorator';

@Controller('chinenigans')
export class ChinenigansController {
  constructor(private readonly chinenigansService: ChinenigansService) {}

  @Post()
  @ApiCreatedAppResponse(CreateChineniganDto)
  create(@Body() createChineniganDto: CreateChineniganDto) {
    return this.chinenigansService.create(createChineniganDto);
  }

  @Get()
  @ApiOkAppResponse(CreateChineniganDto)
  async findAll() {
    const response = await this.chinenigansService.findAll();
    return {
      payload: response,
      message: 'Find all handled successfully',
    };
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.chinenigansService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateChineniganDto: UpdateChineniganDto,
  ) {
    return this.chinenigansService.update(+id, updateChineniganDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.chinenigansService.remove(+id);
  }
}
