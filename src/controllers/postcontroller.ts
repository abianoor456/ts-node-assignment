import BaseController from "./basecontroller";
import posts from "../models/post";
import { Request, Response } from 'express';
import users from '../models/user';



export default class PostController extends BaseController {
    constructor() {
        super(posts);
        
    }

    
    post = async (req : Request, res: Response) => {
        //console.log(this.modelName);
        //console.log(req.body);
        
        try {
           
            const user= await users.findOne({"_id": "61341057ff32c623d5c47140"}) ;
            const post = await this.model.create({
                "title":"post 1",
                "description":"This is a post",
                "user": user
            });
            res.status(200).json(post);
        }
        catch (error) {
            res.status(400).json(error);
        }

    }
}