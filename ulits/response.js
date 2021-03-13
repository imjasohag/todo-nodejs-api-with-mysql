const response=(error,message,obj)=>{
   let res= {
    error,
    message,
    response:obj
    }
    return res

}

module.exports=response