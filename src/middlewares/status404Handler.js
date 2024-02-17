import NotFound from "../errors/NotFound.js";

function status404Handler(req, res, next){
    const error404 = new NotFound();
    next(error404);
}

export default status404Handler;