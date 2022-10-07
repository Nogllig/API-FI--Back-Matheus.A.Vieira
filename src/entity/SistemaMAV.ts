import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class SistemaMAV {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    cliente: string

    @Column()
    plano: string

    @Column()
    velocidade: string

    @Column()
    valor: string
}