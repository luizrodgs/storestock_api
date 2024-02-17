import mongoose from "mongoose";

// eslint-disable-next-line no-unused-vars
function errorHandler(erro, req, res, next) {
    console.log(erro);
    if (erro instanceof mongoose.Error.CastError) {
        res.status(400).send({ message: "Incorrect ID"});
    } else if (erro instanceof mongoose.Error.ValidationError) {
        const errorMessages = Object.values(erro.errors).map(erro => erro.message).join("; ");
        res.status(400).send({message: `Validation error - ${errorMessages}`});
    } else {
        res.status(500).send({ message: `${erro.message} - Server Internal Error`});
    }
}

export default errorHandler;