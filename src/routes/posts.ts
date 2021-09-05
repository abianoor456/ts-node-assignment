import { Router } from "express";
import PostController from "../controllers/postcontroller";

const postRouter= Router();
const postController: PostController= new PostController();

postRouter.get('/', postController.get);
postRouter.post('/', postController.post);

export default postRouter;