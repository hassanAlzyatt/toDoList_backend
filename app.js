const express = require("express"); 
const taskRouter = require("./routers/Task")
const cors = require('cors');

const app = express();




//middlewares

app.use(cors());

app.use(express.json())
app.use("/api/task" , taskRouter)







module.exports = app;