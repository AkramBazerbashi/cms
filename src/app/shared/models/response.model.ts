import { IMainMessage, ISuccessResponse } from "../interfaces/response.interface";

type SuccessResponseService = (message: string, main_message?: IMainMessage, res?: any) => ISuccessResponse<typeof res>

export const successResponse: SuccessResponseService = (message, main_message, res) => ({
    message,
    main_message,
    result: res,
    success: true
})