"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const animals_route_1 = require("../modules/animals/animals.route");
const categories_route_1 = require("../modules/categories/categories.route");
const router = (0, express_1.Router)();
const moduleRoutes = [
    {
        path: '/animal',
        route: animals_route_1.AnimalRoutes,
    },
    {
        path: '/category',
        route: categories_route_1.CategoriesRoutes,
    },
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));
exports.default = router;
