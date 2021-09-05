import { Request, Response } from 'express'
import { any } from 'webidl-conversions';
import mongoose from '../../db';


export default class BaseController {

  modelName: String
  model

  constructor(model) {
    this.modelName = model.modelName,
      this.model = model
  }

  get = async (req: Request, res: Response,) => {
    const obj = await this.model.find({}, function (err, result) {
      if (err) {
        res.status(400).json(err);
      } else {
        res.status(200).json(result);
      }
    });
  }
}