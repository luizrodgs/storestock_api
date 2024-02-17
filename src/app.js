import express from "express";
import connectToDb from "./config/dbConnect.js";
import routes from "./routes/index.js";
import errorHandler from "./middlewares/errorHandler.js";
import status404Handler from "./middlewares/status404Handler.js";

const dbConnection = await connectToDb();

dbConnection.on("error", (error) => {
    console.error("Connection error: ", error);
});

dbConnection.once("open", () => {
    console.log("Successfully connected to MongoDB");
});

const app = express();
routes(app);

app.use(status404Handler);

// eslint-disable-next-line no-unused-vars
app.use(errorHandler);

export default app;