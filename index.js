import express from "express";
import cors from "cors"
import connectDb from "./models/db.js";
import categoryRouter from "./routes/category.js"
import prodectRouter from "./routes/prodect.js"
import bookingRouter from "./routes/booking.js"

//APP INIT
const app = express();

//DB CONNECT
connectDb();

//MIDDLEWAIR
app.use(express.json());
app.use(cors());

//PORT
const port = process.env.PORT || 5050;

//ROUTERS
app.use("/api",categoryRouter)
app.use("/api",prodectRouter)
app.use("/api",bookingRouter)


app.listen(port,()=>{
    console.log("server is raning")
})
