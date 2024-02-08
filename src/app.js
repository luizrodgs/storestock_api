import express from "express";
import connectToDb from "./config/dbConnect.js";
import routes from "./routes/index.js";

const dbConnection = await connectToDb();

dbConnection.on("error", (error) => {
    console.error("Connection error: ", error);
});

dbConnection.once("open", () => {
    console.log("Successfully connected to MongoDB");
});

const app = express();
routes(app);

export default app;