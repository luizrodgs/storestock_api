import baseError from "./baseError.js";

class IncorrectRequest extends baseError {
    constructor(message = "Incorrect Request Data") {
        super(message, 400);
    }
}

export default IncorrectRequest;