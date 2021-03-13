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
    updateTodo:(id,obj,callback)=>{
        const sql = `UPDATE todos SET ? WHERE id=?`
        db.query(sql,[obj,id],callback)
    },
    deleteTodo:(id,callback)=>{
        const sql = `DELETE FROM todos WHERE id=?`
        db.query(sql,id,callback)
    }

}

module.exports=todoModel