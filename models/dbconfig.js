const mysql=require('mysql')
const db=mysql.createConnection({
    user:'root',
    host:'localhost',
    password:'',
    database:'todo_db'

})
db.connect((err)=>{
    if(err)console.log('db error');
    else console.log('db conneect');

})
module.exports=db