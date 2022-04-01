import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DevtiService } from './devti.service';
import { CreateDevtiDto } from './dto/create-devti.dto';
import { UpdateDevtiDto } from './dto/update-devti.dto';

@Controller('devti')
export class DevtiController {
  constructor(private readonly devtiService: DevtiService) {}

  @Post()
  create(@Body() createDevtiDto: CreateDevtiDto) {
    return this.devtiService.create(createDevtiDto);
  }

  @Get()
  findAll() {
    return this.devtiService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.devtiService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDevtiDto: UpdateDevtiDto) {
    return this.devtiService.update(+id, updateDevtiDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.devtiService.remove(+id);
  }
}
