const express=require('express')
const app=express()
const todoRouter=require('./routers/todoRouter')
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use('/todo',todoRouter)


app.listen(2727,()=>{
    console.log('server run on 27272');
})