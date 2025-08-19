import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity() //@Entity('brands') -- nesse caso a entidade se chama brand mas 
          // a tabela se chama brands
export class Brand {
    @PrimaryGeneratedColumn('uuid') //framework (typeORM), gerá o id, se caso fosse integer, 
    id: string;                     // teriamos que criar a lógica dentro do db para incrementar o id
    @Column({length: 60, nullable: false}) //entendesse q seu tamanho no banco é 60, não permite nulo.
    name: string;
}

