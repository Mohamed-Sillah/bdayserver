import express from "express";
import cors from "cors";
import corsOptions from "./config/corsOptions.js";
import wishesRouter from "./routers/wishes.js";
import { connectDB } from "./config/connectDB.js";
import { configDotenv } from "dotenv";

const app = express();
const PORT = process.env.PORT || 5000;

configDotenv();
connectDB();
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/wishes", wishesRouter);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});