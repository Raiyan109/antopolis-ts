import express from 'express';
import { CategoriesControllers } from './categories.controller';


const router = express.Router();


router.post(
    '/',
    CategoriesControllers.createCategory,
);

router.get(
    '/',
    // auth('user', 'admin'),
    CategoriesControllers.getAllCategories,
);

export const CategoriesRoutes = router;