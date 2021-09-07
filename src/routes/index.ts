import {Router} from 'express'
import userRouter from './users'
import postRouter from './posts'

const router = Router()

router.use("/user", userRouter )
router.use("/post", postRouter);
export default router