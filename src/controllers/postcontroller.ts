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
           
            req.body.user= await users.findOne({"_id": "61341057ff32c623d5c47140"}) ;
            const post = await this.model.create(req.body);
            res.status(200).json(post);
        }
        catch (error) {
            res.status(400).json(error);
        }

    }

    put= async (req: Request, res: Response)=>{


        req.body.user= await users.findOne({"_id": req.body.Uid}) ;

        const post = await this.model.findOneAndUpdate({
            _id: req.body.Pid
        }, {'title': req.body.title,
            'description':req.body.description}, {
            upsert: false
        })
       // console.log(post);
        if (post === null)
          res.status(400).json("Post not found");
        else
          res.status(200).json(post);
      }
}