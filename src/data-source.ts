import "reflect-metadata"
import { DataSource } from "typeorm"
import { SistemaMAV } from "./entity/SistemaMAV"
import { UserMAV } from "./entity/UserMAV"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "romiseta1",
    database: "Faculdade",
    synchronize: true,
    logging: true,
    entities: [UserMAV, SistemaMAV],
    subscribers: [],
    migrations: [],
})
