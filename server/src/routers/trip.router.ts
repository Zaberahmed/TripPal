import { Router } from 'express';
import * as tripController from './../controllers/trip.controller';
import { authenticator } from '../middlewares/authenticator';

export const tripRouter = Router();

tripRouter.post('/create', authenticator, tripController.createTrip);
