const express=require('express')
const router=express.Router()
const todoModel=require('../models/todomodel')
const response = require('../ulits/response')

//all todo localhost:2727/todo/alltodo
router.get('/alltodo',(req,res)=>{
    

})

//new todo localhost:2727/todo/newtodo
router.post('/newtodo', (req, res) => {
    const title=req.body.title
    const des=req.body.description
    const isdone=req.body.isdone
    const newtodo={
        title:title,
        des:des,
        isdone:isdone
    }
    todoModel.newTodo(newtodo,(err,result)=>{
        if(err){
            res.send(response(true,'error has found',err))
        }else{
            const id=result.insertId
            newtodo.id=id
            res.send(response(false,'todo is added',newtodo))
        }

    })

})
//delete todo localhost:2727/todo/:id
router.delete('/newtodo', (req, res) => {


})

//update todo localhost:2727/todo/:id
router.put('/newtodo', (req, res) => {


})


module.exports=router