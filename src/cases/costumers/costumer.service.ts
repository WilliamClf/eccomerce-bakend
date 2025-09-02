import { Repository } from "typeorm";
import { Costumer } from "./costumer.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Injectable } from "@nestjs/common";

@Injectable() //permite a injeção no controller
export class CostumerService {

    constructor(
      @InjectRepository(Costumer)
      private repository: Repository<Costumer>
    ) {}

    //service/provider retorna uma promise
    findAll(): Promise<Costumer[]> {
      return this.repository.find();
    }

    findByID(id: string):Promise<Costumer | null> {
      return this.repository.findOneBy({id: id});
    }

    Save(costumer: Costumer): Promise<Costumer> {
    //PERSISTE, não insiro, nem altero, pode ser os dois
      return this.repository.save(costumer);
    }

    async Remove(id: string): Promise<void> {
      await this.repository.delete({id});
    }

}