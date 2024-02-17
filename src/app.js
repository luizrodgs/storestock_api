import express from "express";
import connectToDb from "./config/dbConnect.js";
import routes from "./routes/index.js";
import errorHandler from "./middlewares/errorHandler.js";

const dbConnection = await connectToDb();

dbConnection.on("error", (error) => {
    console.error("Connection error: ", error);
});

dbConnection.once("open", () => {
    console.log("Successfully connected to MongoDB");
});

const app = express();
routes(app);

// eslint-disable-next-line no-unused-vars
app.use(errorHandler);

export default app;