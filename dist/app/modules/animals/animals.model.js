"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnimalModel = void 0;
const mongoose_1 = require("mongoose");
const animalSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    }
}, { timestamps: true });
exports.AnimalModel = (0, mongoose_1.model)('Animal', animalSchema);
