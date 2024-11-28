import express from 'express';
import { AnimalControllers } from './animals.controller';

const router = express.Router();


router.post(
    '/',
    AnimalControllers.createAnimal,
);

router.get(
    '/',
    // auth('user', 'admin'),
    AnimalControllers.getAllAnimals,
);

export const AnimalRoutes = router;