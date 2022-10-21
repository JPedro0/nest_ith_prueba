import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User{
    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    nombre : string

    @Column()
    correo : string

    @Column({ default : null})
    telefono? : string    

    @Column()
    ciudad : string
}