import { NextFunction, Request, Response } from "express"
import { SistemaMAV } from "../entity/SistemaMAV"
import { UserMAV } from "../entity/UserMAV"
import { AppDataSource } from "../data-source"

export class SistemaMAVController {
    private SistemaMAVRepository = AppDataSource.getRepository(SistemaMAV);

    async all(request: Request, response: Response, next: NextFunction) {
        return this.SistemaMAVRepository.find();
    }

    async one(request: Request, response: Response, next: NextFunction) {
        const id = request.params
        const user = await AppDataSource.getRepository(SistemaMAV).findOneBy(id)
        return response.json(user)
    }

    async save(request: Request, response: Response, next: NextFunction) {
        return this.SistemaMAVRepository.save(request.body);
    }

    async update(request: Request, response: Response, next: NextFunction) {
        const id = request.params
        const user = await AppDataSource.getRepository(SistemaMAV).update(id, request.body)
        if (user.affected == 1) {
            const userUpdated = await AppDataSource.getRepository(SistemaMAV).findOneBy(id)
            response.json(userUpdated)
        }
    }

    //Remover
    async remove(request: Request, response: Response, next: NextFunction) {
        const id = request.params
        const user = await AppDataSource.getRepository(SistemaMAV).delete(id)
        if (user.affected == 1) {
            const userUpdated = await AppDataSource.getRepository(SistemaMAV).findOneBy(id)
            response.json(userUpdated)
        }
    }
}


export class UserMAVController {
    private UserMAVRepository = AppDataSource.getRepository(UserMAV);

    async all(request: Request, response: Response, next: NextFunction) {
        return this.UserMAVRepository.find();
    }

    async one(request: Request, response: Response, next: NextFunction) {
        const cod = request.params
        const user = await AppDataSource.getRepository(UserMAV).findOneBy(cod)
        return response.json(user)
    }

    async save(request: Request, response: Response, next: NextFunction) {
        return this.UserMAVRepository.save(request.body);
    }

    async update(request: Request, response: Response, next: NextFunction) {
        const cod = request.params
        const user = await AppDataSource.getRepository(UserMAV).update(cod, request.body)
        if (user.affected == 1) {
            const userUpdated = await AppDataSource.getRepository(UserMAV).findOneBy(cod)
            response.json(userUpdated)
        }
    }

    //Remover
    async remove(request: Request, response: Response, next: NextFunction) {
        const cod = request.params
        const user = await AppDataSource.getRepository(UserMAV).delete(cod)
        if (user.affected == 1) {
            const userUpdated = await AppDataSource.getRepository(UserMAV).findOneBy(cod)
            response.json(userUpdated)
        }
    }
}