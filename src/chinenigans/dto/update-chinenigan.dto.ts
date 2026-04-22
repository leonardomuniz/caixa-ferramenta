import { PartialType } from '@nestjs/swagger';
import { CreateChineniganDto } from './create-chinenigan.dto';

export class UpdateChineniganDto extends PartialType(CreateChineniganDto) {}
