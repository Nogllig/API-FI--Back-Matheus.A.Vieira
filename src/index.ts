import * as express from "express"
import * as bodyParser from "body-parser"
import { Request, Response } from "express"
import { AppDataSource } from "./data-source"
import { Routes } from "./routes" 
import { SistemaMAV } from "./entity/SistemaMAV"
import { UserMAV } from "./entity/UserMAV"

AppDataSource.initialize().then(async () => {

    // create express app
    const app = express()
    app.use(bodyParser.json())

    // register express routes from defined application routes
    Routes.forEach(route => {
        (app as any)[route.method](route.route, (req: Request, res: Response, next: Function) => {
            const result = (new (route.controller as any))[route.action](req, res, next)
            if (result instanceof Promise) {
                result.then(result => result !== null && result !== undefined ? res.send(result) : undefined)

            } else if (result !== null && result !== undefined) {
                res.json(result)
            }
        })
    })

    // setup express app here
    // ...

    // start express server
    app.listen(3000)

    // insert new SistemaMAVs for test
    await AppDataSource.manager.save(
        AppDataSource.manager.create(SistemaMAV, {
            cliente: "Gemario",
            plano: "WMax power",
            velocidade: "250 megas",
            valor: "R$ 100,00"
        })
    )

    await AppDataSource.manager.save(
        AppDataSource.manager.create(SistemaMAV, {
            cliente: "Osvaldo",
            plano: "VMax lite",
            velocidade: "80 mega",
            valor: "R$ 40,00"
        })
    )

    await AppDataSource.manager.save(
        AppDataSource.manager.create(SistemaMAV, {
            cliente: "Ediomundo",
            plano: "VMax force",
            velocidade: "300 mega",
            valor: "R$ 99,00"
        })
    )

    await AppDataSource.manager.save(
        AppDataSource.manager.create(SistemaMAV, {
            cliente: "Clovis",
            plano: "VMax power",
            velocidade: "250 mega",
            valor: "R$ 100,00"
        })
    )

    await AppDataSource.manager.save(
        AppDataSource.manager.create(SistemaMAV, {
            cliente: "Geraldo",
            plano: "VMax lite",
            velocidade: "80 mega",
            valor: "R$ 40,00"
        })
    )

    await AppDataSource.manager.save(
        AppDataSource.manager.create(UserMAV, {
            user: "Ricardo"
        })
    )

    console.log("Express server has started on port 3000. Open http://localhost:3000/SistemaMAVs to see results")

}).catch(error => console.log(error))
