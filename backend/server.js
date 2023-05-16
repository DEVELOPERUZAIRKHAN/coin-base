const express= require("express");
const dbConnect= require("./database/index.js")
const {PORT}= require('./config/index.js')
const router=require("./routes/index.js")
const errorHandler= require("./middlewares/errorHandler.js")
const cookieParser=require("cookie-parser")
dbConnect()

const app=express()
app.use("/storage",express.static("storage"))
app.use(cookieParser())
app.use(express.json())
app.use(router)
app.use(errorHandler)
app.listen(PORT,console.log(`Server is listening on PORT :${PORT}`));
