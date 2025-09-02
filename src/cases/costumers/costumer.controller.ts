import { Body, Controller, Delete, Get, HttpCode, HttpException, HttpStatus, Param, ParseUUIDPipe, Post, Put } from "@nestjs/common";
import { Costumer } from "./costumer.entity";
import { CostumerService } from "./costumer.service";

@Controller('costumers')
export class CostumerController {
  constructor(
    private service: CostumerService
  ) {}

  @Get()
  findAll(): Promise<Costumer[]> {
    return this.service.findAll();
  }

  @Get(':id')
  async findByID(@Param('id', ParseUUIDPipe) id: string): Promise<Costumer> {
    const found = await this.service.findByID(id);

    if (!found) {
      throw new HttpException('Costumer not found', HttpStatus.NOT_FOUND);
    }

    return found;
  }

  @Post()
  create(@Body() costumer: Costumer) : Promise<Costumer> {
    return this.service.Save(costumer);
  }

  @Put(':id')
  async update(@Param('id', ParseUUIDPipe) id: string, @Body() costumer: Costumer): Promise<Costumer> {
    const found = await this.service.findByID(id);

    if (!found) {
      throw new HttpException('Costumer not found', HttpStatus.NOT_FOUND);
    }

    costumer.id = id;

    return this.service.Save(costumer);
  }
  
  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async remove(@Param('id', ParseUUIDPipe) id: string): Promise<void> {
    const found = await this.service.findByID(id);

    if (!found) {
      throw new HttpException('Costumer not found', HttpStatus.NOT_FOUND);
    }

    await this.service.Remove(id);
  }
}