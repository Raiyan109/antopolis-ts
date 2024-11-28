import { TAnimal } from "./animals.interface";
import { AnimalModel } from "./animals.model";

const createAnimalIntoDB = async (animal: TAnimal) => {
    const isAnimalExists = await AnimalModel.findOne({ name: animal.name })
    if (isAnimalExists) {
        throw new Error('This animal is already exists!');
    }
    const result = await AnimalModel.create(animal)
    return result
}

const getAnimalFromDB = async () => {

    const result = await AnimalModel.find()
    return result
}

export const AnimalServices = {
    createAnimalIntoDB,
    getAnimalFromDB
}
