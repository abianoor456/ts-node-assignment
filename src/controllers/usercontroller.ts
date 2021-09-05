import BaseController from "./basecontroller";
import { Request, Response } from 'express';
import users from '../models/user';

export default class UserController extends BaseController {
    constructor() {
        super(users);
    }

    post = async (req: Request, res: Response) => {
        //console.log(this.modelName);
        //console.log(req.body);
        try {
            const user = await this.model.create({
                "email": "user1@domain.com",
                "password": "123456"
            });
            res.status(200).json(user);
        }
        catch (error) {
            res.status(400).json(error);
        }

    }
}