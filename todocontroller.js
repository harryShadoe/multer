const model = require('../models')


const addTodo = async(req, res)=>{
    //#swagger.tags=['todo']
        /*  #swagger.requestBody = {
            required: true,
            content: {
                "application/json": {
                    schema: {
                        $ref: "#/components/schemas/todoSchema"
                    }  
                }
            }
        } 
    */


try {

   
var data = req.body;
console.log(req.file)
if(req.file){
    var imagepath ="localhost:5000/"+req.file.path;
    data.banner= imagepath;
}


console.log(data);
var result = await model.todo.create({
    title:data.title,
    description:data.description,
    banner:data.banner,
    userId:data.userId,
    status:data.status,
    date:data.date,
    time:data.time

});




res.status(200).json({message:"Todo added"})

    
} catch (error) {
    console.log(error)
    res.json({message:"Error while adding todo"})
}


}



module.exports ={
    addTodo:addTodo
}