import express from 'express';
import { AnimalControllers } from './animals.controller';

const router = express.Router();


router.post(
    '/',
    AnimalControllers.createAnimal,
);

export const AnimalRoutes = router;