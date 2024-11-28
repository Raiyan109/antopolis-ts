"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnimalServices = void 0;
const animals_model_1 = require("./animals.model");
const createAnimalIntoDB = (animal) => __awaiter(void 0, void 0, void 0, function* () {
    const isAnimalExists = yield animals_model_1.AnimalModel.findOne({ name: animal.name });
    if (isAnimalExists) {
        throw new Error('This animal is already exists!');
    }
    const result = yield animals_model_1.AnimalModel.create(animal);
    return result;
});
const getAnimalFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield animals_model_1.AnimalModel.find();
    return result;
});
exports.AnimalServices = {
    createAnimalIntoDB,
    getAnimalFromDB
};
