import { TCategory } from "./categories.interface";
import { CategoryModel } from "./categories.model";


const createCategoryIntoDB = async (category: TCategory) => {
    const isCategoryExists = await CategoryModel.findOne({ name: category.name })
    if (isCategoryExists) {
        throw new Error('This category is already exists!');
    }
    const result = await CategoryModel.create(category)
    return result
}

const getCategoryFromDB = async () => {

    const result = await CategoryModel.find()
    return result
}

export const CategoryServices = {
    createCategoryIntoDB,
    getCategoryFromDB
}
