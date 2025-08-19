import { Repository } from "typeorm";
import { Category } from "./category.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Injectable } from "@nestjs/common";

@Injectable() //permite a injeção no controller
export class CategoryService {

    constructor(
      @InjectRepository(Category)
      private repository: Repository<Category>
    ) {}

    //service/provider retorna uma promise
    findAll(): Promise<Category[]> {
      return this.repository.find();
    }

    findByID(id: string):Promise<Category | null> {
      return this.repository.findOneBy({id: id});
    }

    Save(category: Category): Promise<Category> {
    //PERSISTE, não insiro, nem altero, pode ser os dois
      return this.repository.save(category);
    }

    async Remove(id: string): Promise<void> {
      await this.repository.delete({id});
    }

}