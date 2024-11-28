"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnimalRoutes = void 0;
const express_1 = __importDefault(require("express"));
const animals_controller_1 = require("./animals.controller");
const router = express_1.default.Router();
router.post('/', animals_controller_1.AnimalControllers.createAnimal);
router.get('/', 
// auth('user', 'admin'),
animals_controller_1.AnimalControllers.getAllAnimals);
exports.AnimalRoutes = router;
