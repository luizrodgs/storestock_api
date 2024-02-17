import mongoose from "mongoose";
import baseError from "../errors/BaseError.js";
import IncorrectRequest from "../errors/IncorrectRequest.js";
import ValidationError from "../errors/ValidationError.js";
import NotFound from "../errors/NotFound.js";

// eslint-disable-next-line no-unused-vars
function errorHandler(erro, req, res, next) {
    console.log(erro);
    if (erro instanceof mongoose.Error.CastError) {
        new IncorrectRequest().sendResponse(res);
    } else if (erro instanceof mongoose.Error.ValidationError) {
        new ValidationError(erro).sendResponse(res);
    } else if (erro instanceof NotFound) {
        erro.sendResponse(res);
    } else {
        new baseError().sendResponse(res);
    }
}

export default errorHandler;