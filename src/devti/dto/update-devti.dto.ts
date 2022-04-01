import { PartialType } from '@nestjs/swagger';
import { CreateDevtiDto } from './create-devti.dto';

export class UpdateDevtiDto extends PartialType(CreateDevtiDto) {}
