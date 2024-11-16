const express=require("express")
const app=express()
const bodyparser=require("body-parser")
const bcrypt=require("bcrypt")
const cors=require("cors")

const routes=require("./routes/expence")
const sequelize=require("./util/database")

app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())
app.use(cors())
app.use("/user",routes)

sequelize.sync()
.then((result)=>{
    app.listen(4000,()=>{
        console.log(`Server is Running on Port 4000`)
    })
 })
.catch((err)=>{
    console.log(`Error syncing database:`, err)
})