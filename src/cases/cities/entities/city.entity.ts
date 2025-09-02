import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { State } from "./state.entity";

@Entity('city')
export class City {
    @PrimaryGeneratedColumn('uuid') //framework (typeORM), gerá o id, se caso fosse integer, 
    id: string

    @Column({length: 60, nullable: false})
    name: string

    @Column({length: 7, nullable: false})
    ibge: string

    @ManyToOne(() => State, {eager: true, nullable: false})
    state: State;
}