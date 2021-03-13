const db=require('./dbconfig')
const todoModel={
    allTodo:()=>{

    },
    newTodo:(obj,callback)=>{
        const sql = `INSERT INTO todos SET ?`
        db.query(sql,obj,callback)
        
    },
    updateTodo:()=>{

    },
    deleteTodo:()=>{

    }

}

module.exports=todoModel