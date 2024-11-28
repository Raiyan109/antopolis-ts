"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const animals_route_1 = require("../modules/animals/animals.route");
const router = (0, express_1.Router)();
const moduleRoutes = [
    {
        path: '/animal',
        route: animals_route_1.AnimalRoutes,
    }
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));
exports.default = router;
