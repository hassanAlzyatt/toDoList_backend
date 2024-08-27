const TaskModel = require("../models/Task")


exports.createTask = async (req, res) => {


 try{
    const newTask =  await TaskModel.create(req.body)

    res.status(201).send(
     {
         status : "Task Created Succesfully",
         newTask
     }
    )
 }
 catch(error) {
    res.status(400).send(
        {
            status : "Failed To Create Task ",
            error
        }
       )
 }
}



exports.getAllTasks = async (req, res) => {


    try{
       const Tasks_1=  await TaskModel.find( 
        {
            Category: 'important-urgent',
            Status: 'not Done',

        }
       )
       const Tasks_2=  await TaskModel.find( 
        {
            Category: 'notImportant-urgent',
            Status: 'not Done',

        }
       )
       const Tasks_3=  await TaskModel.find( 
        {
            Category: 'important-notUrgent',
            Status: 'not Done',

        }
       )
       const Tasks_4=  await TaskModel.find( 
        {
            Category: 'notImportant-notUrgent',
            Status: 'not Done',

        }
       )
       const Tasks_5=  await TaskModel.find( 
        {
           
            Status: 'Done',

        }
       )
   
       const Tasks = [...Tasks_1,...Tasks_2,...Tasks_3,...Tasks_4,...Tasks_5]
       res.status(200).send(
        {
            status : "Tasks has been retrived Succesfully",
            Tasks
        }
       )
    }
    catch(error) {
       res.status(400).send(
           {
               status : "Failed To retrive Tasks ",
               error
           }
          )
    }
   }


   
exports.updateTask = async (req, res) => {


    try{
       const newTask =  await TaskModel.findByIdAndUpdate(req.params.id,req.body ,
        {
            new:true,
            runValidators: true
        })
       res.status(200).send(
        {
            status : "Task updated Succesfully",
            newTask
        }
       )
    }
    catch(error) {
       res.status(400).send(
           {
               status : "Failed To Update The Task ",
               error
           }
          )
    }
   }




   
exports.deleteTask = async (req, res) => {


    try{
        await TaskModel.findByIdAndDelete(req.params.id)
   
       res.status(204).send(
        {
            status : "Task Deleted Succesfully",
            
        }
       )
    }
    catch(error) {
       res.status(400).send(
           {
               status : "Failed To Delete Task ",
               error:error
           }
          )
    }
   }