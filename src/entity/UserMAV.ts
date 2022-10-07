import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class UserMAV {

    @PrimaryGeneratedColumn()
    cod: number

    @Column()
    user: string
}

