const mongoose = require("mongoose")
const app = require("./app")


const port = 3000;


app.listen(port, () => {
    console.log("server is listening")
})


mongoose.connect("mongodb://127.0.0.1:27017/ToDoList")
.then(() => console.log("connected to database succesfully"))
.catch((error) => {
    console.log("failed to connect to database succesfully",error)

})
