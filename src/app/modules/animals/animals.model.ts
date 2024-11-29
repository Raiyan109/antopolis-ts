import { Schema, model } from "mongoose";
import { TAnimal } from "./animals.interface";


const animalSchema = new Schema<TAnimal>({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    category: {
        type: String,
        // required: true
    },
}, { timestamps: true })

export const AnimalModel = model<TAnimal>('Animal', animalSchema)