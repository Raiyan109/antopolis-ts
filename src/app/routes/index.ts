import { Router } from 'express';
import { AnimalRoutes } from '../modules/animals/animals.route';
import { CategoriesRoutes } from '../modules/categories/categories.route';

const router = Router();

const moduleRoutes = [
    {
        path: '/animal',
        route: AnimalRoutes,
    },
    {
        path: '/category',
        route: CategoriesRoutes,
    },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;