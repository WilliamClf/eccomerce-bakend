import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Category } from "../categories/category.entity";
import { Brand } from "../brands/brand.entity";

@Entity('product') //@Entity('product') -- nesse caso a entidade se chama product mas 
          // a tabela se chama products
export class Product {
    @PrimaryGeneratedColumn('uuid') //framework (typeORM), gerá o id, se caso fosse integer, 
    id: string;                     // teriamos que criar a lógica dentro do db para incrementar o id

    @Column({length: 60, nullable: false}) //entendesse q seu tamanho no banco é 60, não permite nulo.
    name: string;

    @Column('text', {nullable: true})
    description: string;

    @Column('decimal', {nullable: false, precision: 10, scale: 2})
    price: number;

    @Column('boolean', {nullable: false, default: true})
    active: boolean;
    
    //eager: true -- carrega a categoria junto com o produto
    //manyToOne -- muitos para um | product => categoria
    @ManyToOne(() => Category, {eager: true, nullable: false})
    category: Category;

    @ManyToOne(() => Brand, {eager: false, nullable: true})
    brand: Brand;
}
