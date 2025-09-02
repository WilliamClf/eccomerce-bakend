import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Product } from "src/cases/products/product.entity";
import { Order } from "./order.entity";

@Entity('orders')
export class OrderItem {
    @PrimaryGeneratedColumn('uuid') 
    id: string;  

    @ManyToOne(() => Order)
    order : Order;

    @ManyToOne(() => Product, {eager: true, nullable: false})
    customer : Product;

    @Column({nullable: false})
    quantity : number;

    @Column('decimal', {nullable: false, precision: 10, scale: 2})
    value: number;
}


