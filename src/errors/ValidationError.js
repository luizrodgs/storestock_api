import IncorrectRequest from "./IncorrectRequest.js";

class ValidationError extends IncorrectRequest {
    constructor(erro) {
        const errorMessages = Object.values(erro.errors).map(erro => erro.message).join("; ");
        super(`Validation error - ${errorMessages}`);
    }
}

export default ValidationError;