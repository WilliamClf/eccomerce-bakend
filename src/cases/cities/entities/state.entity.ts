import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('state')
export class State {
    @PrimaryGeneratedColumn('uuid') //framework (typeORM), gerá o id, se caso fosse integer, 
    id: string

    @Column({length: 60, nullable: false})
    name: string

    @Column({length: 2, nullable: false})
    ibge: string

    @Column({length: 2, nullable: false})
    acronym: string
}