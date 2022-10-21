import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Sales } from './sales.entity';

@Entity()
export class Details{

    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    product : String;

    @Column()
    quantity : number;

    @Column()
    unit_price : number

    @ManyToOne(() => Sales, (sale) => sale.details)
    @JoinColumn({name:'id_sale'})
    id_sale: number;
}