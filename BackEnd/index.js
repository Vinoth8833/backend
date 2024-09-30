const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())

const array = [
    {
        "name":"vinoth",
        "age":"24",
        "email":"vinothismail5734256@gmail.com"
    },
    {
        "name":"ajith",
        "age":"60",
        "email":"Ajithkumar@gmail.com"
    },
    {
        "name":"vijay",
        "age":"54",
        "email":"vijayactor@gmail.com"
    },
    {
        "name":"vikram",
        "age":"36",
        "email":"vijayactor@gmail.com"
    }
]

app.get("/", (req,res)=>{
    res.send({"message":array})
})

app.listen(3000, ()=>{
    console.log("sucess full run")
}) 