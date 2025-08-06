const express = require('express')
const cors = require('cors')


const app = express()
const port = 5000;



app.use(cors())
require('./database/user')
require('./database/leaveApplication')




app.use(express.json())
app.use(require("./routes/auth"))
app.use(require("./routes/activity"))





app.listen(port,()=>{
    console.log("Server is running on " + port);
})



// -----------------------------------------------------------

const {mongoUrl} = require('./keys')
const mongoose = require('mongoose')


mongoose.connect(mongoUrl)

mongoose.connection.on("connected",() =>{
    console.log("Server is connected to database")
})

mongoose.connection.on("error",() =>{
    console.log("Server is not connected to database")
})

