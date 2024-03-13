const mongoose= require("mongoose")

mongoose
.connect(process.env.DATABASE)
.then(()=>{
    console.log("db connected", process.env.DATABASE)
})
.catch((err)=>{
    console.log(err.message)
})
