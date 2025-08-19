import { Repository } from "typeorm";
import { Brand } from "./brand.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Injectable } from "@nestjs/common";

@Injectable() //permite a injeção no controller
export class BrandService {

    constructor(
      @InjectRepository(Brand)
      private repository: Repository<Brand>
    ) {}

    //service/provider retorna uma promise
    findAll(): Promise<Brand[]> {
      return this.repository.find();
    }

    findByID(id: string):Promise<Brand | null> {
      return this.repository.findOneBy({id: id});
    }

    Save(brand: Brand): Promise<Brand> {
    //PERSISTE, não insiro, nem altero, pode ser os dois
      return this.repository.save(brand);
    }

    async Remove(id: string): Promise<void> {
      await this.repository.delete({id});
    }

}