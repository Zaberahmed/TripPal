import { Router, Request, Response } from 'express';
import { userRouter } from './user.router';
import { tripRouter } from './trip.router';

const router = Router();

router.use('/user', userRouter);
router.use('/trip', tripRouter);
router.use('*', (req: Request, res: Response) => res.status(404).send('Error! Invalid Route!'));

export { router };
