import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity() //@Entity('categories') -- nesse caso a entidade se chama category mas 
          // a tabela se chama categories
export class Category {
    @PrimaryGeneratedColumn('uuid') //framework (typeORM), gerá o id, se caso fosse integer, 
    id: string;                     // teriamos que criar a lógica dentro do db para incrementar o id
    @Column({length: 60, nullable: false}) //entendesse q seu tamanho no banco é 60, não permite nulo.
    name: string;
}
