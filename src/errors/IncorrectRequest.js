import BaseError from "./BaseError.js";

class IncorrectRequest extends BaseError {
    constructor(message = "Incorrect Request Data") {
        super(message, 400);
    }
}

export default IncorrectRequest;