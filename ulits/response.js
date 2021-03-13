const response=(error,message,data)=>{
   let res= {
    error,
    message,
    response:data
    }
    return res

}

module.exports=response