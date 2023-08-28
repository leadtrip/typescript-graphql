import {BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";

@Entity()
export class Product extends BaseEntity{
    @PrimaryGeneratedColumn()
    id!: number

    @Column()
    name!: string

    @Column({type: "decimal"})
    price!: number

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date
}