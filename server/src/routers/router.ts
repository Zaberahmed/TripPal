import { Router, Request, Response } from 'express';
import * as userController from './../controllers/user.controller';
const router = Router();

router.get('/', userController.getUsers);

router.use('*', (req: Request, res: Response) => res.status(404).send('Error! Invalid Route!'));

export { router };
