import { Repository } from "typeorm";
import { City } from "../entities/city.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Injectable } from "@nestjs/common";

@Injectable() //permite a injeção no controller
export class CityService {

    constructor(
      @InjectRepository(City)
      private repository: Repository<City>
    ) {}

    //service/provider retorna uma promise
    findAll(): Promise<City[]> {
      return this.repository.find();
    }

    findByID(id: string):Promise<City | null> {
      return this.repository.findOneBy({id: id});
    }

    Save(city: City): Promise<City> {
    //PERSISTE, não insiro, nem altero, pode ser os dois
      return this.repository.save(city);
    }

    async Remove(id: string): Promise<void> {
      await this.repository.delete({id});
    }

}