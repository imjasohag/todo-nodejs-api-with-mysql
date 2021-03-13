const db=require('./dbconfig')
const todoModel={
    allTodo: (callback)=>{
        const sql = `SELECT *  FROM todos`
        db.query(sql,callback)
    },
    todoFilter: (isDone,callback) => {
        const sql = `SELECT * FROM todos WHERE isDone=?`
        db.query(sql,isDone,callback)
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