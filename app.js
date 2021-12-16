const express = require("express")
const mongoose = require("mongoose")
const app = express()
const authRoute = require('../User/Routes/authroutes')
const port = 8000
const mongoDB = 'mongodb://localhost/users';


//mongoose connecting code
mongoose.connect(mongoDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("connection successfull"))
    .catch((err) => console.log(err))


app.use(express.json())


app.listen(port, () => {
    console.log(`listning to the port ${port}`)
})


app.use(authRoute)