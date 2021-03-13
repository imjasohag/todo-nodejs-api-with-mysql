const express=require('express')
const router=express.Router()
const todoModel=require('../models/todomodel')
const response = require('../ulits/response')

//all todo localhost:2727/todo/alltodo
router.get('/alltodo',(req,res)=>{

    todoModel.allTodo((err, result) => {
        if (err) {
            res.send(response(true, 'error has found', err))
        } else {
            if (result.length > 0)
                res.send(response(false, 'todo list', result))
            else res.send(response(false, 'todo list', []))
        }

    })
    

})
//all todo localhost:2727/todo/filter-todo
router.get('/filter-todo',(req,res)=>{
    const isDone = req.body.isDone
    todoModel.todoFilter(isDone,(err, result) => {
        if (err) {
            res.send(response(true, 'error has found', err))
        } else {
            if (result.length > 0)
                res.send(response(false, 'todo list', result))
            else res.send(response(false, 'todo list', []))
        }
    })
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
router.put('/:id', (req,res) => {
    const id=req.params.id
    const {title,des,isDone}=req.body
    let obj={}
    if(title) obj.title=title
    if(des) obj.des=des
    if(isDone) obj.isDone=isDone
    todoModel.updateTodo(id, obj,(err, result)=>{
        if (err) {
            res.send(response(true, 'error has found', err))
        } else {
            res.send(response(false, 'todo updated', obj))
        }
    })

})


module.exports=router