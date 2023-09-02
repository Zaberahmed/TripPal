import { Router, Request, Response } from 'express';
import { userRouter } from './user.router';

const router = Router();

router.use('/user', userRouter);
router.use('*', (req: Request, res: Response) => res.status(404).send('Error! Invalid Route!'));

export { router };
