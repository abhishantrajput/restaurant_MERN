import express from "express";
import cors from "cors";
import dotenv from "dotenv"
import {dbConnection} from "./database/dbConnection.js"
import { errorMiddleware } from "./error/error.js";
import reservationRoute from "./routes/reservation.js"

const app = express();

dotenv.config({path: "./config/config.env"})
console.log(process.env.Frontend_URL)

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use(cors({
    origin: [process.env.Frontend_URL],
    methods: ["POST"],
    credentials: true,
}))


app.use("/reservation",reservationRoute)

dbConnection();
app.use(errorMiddleware)

export default app;
