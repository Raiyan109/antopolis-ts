import { Router } from 'express';
import { AnimalRoutes } from '../modules/animals/animals.route';

const router = Router();

const moduleRoutes = [
    {
        path: '/animal',
        route: AnimalRoutes,
    }
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;