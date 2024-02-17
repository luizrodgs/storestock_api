import mongoose from "mongoose";
import baseError from "../errors/baseError.js";
import IncorrectRequest from "../errors/incorrectRequest.js";
import ValidationError from "../errors/validationError.js";

// eslint-disable-next-line no-unused-vars
function errorHandler(erro, req, res, next) {
    console.log(erro);
    if (erro instanceof mongoose.Error.CastError) {
        new IncorrectRequest().sendResponse(res);
    } else if (erro instanceof mongoose.Error.ValidationError) {
        new ValidationError(erro).sendResponse(res);
    } else {
        new baseError().sendResponse(res);
    }
}

export default errorHandler;