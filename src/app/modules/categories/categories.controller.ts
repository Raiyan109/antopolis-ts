import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { CategoryServices } from "./categories.service";


const createCategory = catchAsync(async (req, res) => {

    const result = await CategoryServices.createCategoryIntoDB(req.body);

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: 'Category added successfully',
        data: result,
    });
});

const getAllCategories = catchAsync(async (req, res) => {
    const result = await CategoryServices.getCategoryFromDB();

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
        message: 'Categories retrieved successfully',
        data: result,
    });
});

export const CategoriesControllers = {
    createCategory,
    getAllCategories
}