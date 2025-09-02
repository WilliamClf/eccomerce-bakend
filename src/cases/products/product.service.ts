import { Repository } from "typeorm";
import { Product } from "./product.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Injectable } from "@nestjs/common";
import { Category } from "../categories/category.entity";

@Injectable() //permite a injeção no controller
export class ProductService {

    constructor(
      @InjectRepository(Product)
      private repository: Repository<Product>
    ) {}

    //service/provider retorna uma promise
    findAll(category?: Category): Promise<Product[]> {
      if (!category) {
        return this.repository.find();
      } else {
        return this.repository.find({
          where: {category: category}});
      } 
    }

    findByID(id: string):Promise<Product | null> {
      return this.repository.findOneBy({id: id});
    }

    Save(product: Product): Promise<Product> {
    //PERSISTE, não insiro, nem altero, pode ser os dois
      return this.repository.save(product);
    }

    async Remove(id: string): Promise<void> {
      await this.repository.delete({id});
    }

}