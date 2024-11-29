"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoriesRoutes = void 0;
const express_1 = __importDefault(require("express"));
const categories_controller_1 = require("./categories.controller");
const router = express_1.default.Router();
router.post('/', categories_controller_1.CategoriesControllers.createCategory);
router.get('/', 
// auth('user', 'admin'),
categories_controller_1.CategoriesControllers.getAllCategories);
exports.CategoriesRoutes = router;
