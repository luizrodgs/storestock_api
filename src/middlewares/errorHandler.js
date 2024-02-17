import mongoose from "mongoose";

// eslint-disable-next-line no-unused-vars
function errorHandler(erro, req, res, next) {
    console.log(erro);
    if (erro instanceof mongoose.Error.CastError) {
        res.status(400).send({ message: "Incorrect ID"});
    } else {
        res.status(500).send({ message: `${erro.message} - Server Internal Error`});
    }
}

export default errorHandler;