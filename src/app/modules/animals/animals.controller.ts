import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { AnimalServices } from "./animals.service";

const createAnimal = catchAsync(async (req, res) => {

    const result = await AnimalServices.createAnimalIntoDB(req.body);

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: 'Animal added successfully',
        data: result,
    });
});

const getAllAnimals = catchAsync(async (req, res) => {
    const result = await AnimalServices.getAnimalFromDB();

    // Check if the database collection is empty or no matching data is found
    if (!result || result.length === 0) {
        return sendResponse(res, {
            success: false,
            statusCode: httpStatus.NOT_FOUND,
            message: 'No data found.',
            data: [],
        });
    }

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: 'Animals retrieved successfully',
        data: result,
    });
});

export const AnimalControllers = {
    createAnimal,
    getAllAnimals
}