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

export const AnimalControllers = {
    createAnimal
}