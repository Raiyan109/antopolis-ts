import { Schema, model } from "mongoose";
import { TCategory } from "./categories.interface";



const categorySchema = new Schema<TCategory>({
    name: {
        type: String,
        required: true
    }
}, { timestamps: true })

export const CategoryModel = model<TCategory>('Category', categorySchema)