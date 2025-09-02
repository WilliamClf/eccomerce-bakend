import { Repository } from "typeorm";
import { State } from "../entities/state.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Injectable } from "@nestjs/common";

@Injectable() //permite a injeção no controller
export class StateService {

    constructor(
      @InjectRepository(State)
      private repository: Repository<State>
    ) {}

    //service/provider retorna uma promise
    findAll(): Promise<State[]> {
      return this.repository.find();
    }

    findByID(id: string):Promise<State | null> {
      return this.repository.findOneBy({id: id});
    }

    Save(state: State): Promise<State> {
    //PERSISTE, não insiro, nem altero, pode ser os dois
      return this.repository.save(state);
    }

    async Remove(id: string): Promise<void> {
      await this.repository.delete({id});
    }

}