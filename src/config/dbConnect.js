import mongoose from "mongoose";

const adminUsername = "luizrodgs"
const adminPassword = "Admin123456"

async function connectToDb() {
    mongoose.connect(`mongodb+srv://${adminUsername}:${adminPassword}@cluster0.gnfzza8.mongodb.net/?retryWrites=true&w=majority`);

    return mongoose.connection;
}

export default connectToDb;