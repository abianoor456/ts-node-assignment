import BaseController from "./basecontroller";
import { Request, Response } from 'express';
import users from '../models/user';

export default class UserController extends BaseController {
    constructor() {
        super(users);
    }

    post = async (req: Request, res: Response) => {
        console.log(req.body);
        try {
            const user = await this.model.create(req.body);
            res.status(200).json(user);
        }
        catch (error) {
            res.status(400).json(error);
        }

    }

    put= async (req: Request, res: Response)=>{


        const user = await this.model.findOneAndUpdate({
            _id: req.body.Uid
        }, {'email': req.body.email,
            'password':req.body.password}, {
            upsert: false
        })
       // console.log(post);
        if (user === null)
          res.status(400).json("Post not found");
        else
          res.status(200).json(user);
      }



}