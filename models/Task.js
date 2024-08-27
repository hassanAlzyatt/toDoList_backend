const mongoose = require("mongoose");


const TaskSchema = mongoose.Schema(
    {
        Title:{
            type:String,
            required:[true,"Title is required"],
            unique:true
        },
        Time:{
            type:String,
           
        },
        Category:{
            type:String,
            required:[true,"Category is required"],
           

        },
        Status:{
            type:String,
            default : "not Done"
           

        }
    }
)

const TaskModel = mongoose.model("Task", TaskSchema);

module.exports = TaskModel;