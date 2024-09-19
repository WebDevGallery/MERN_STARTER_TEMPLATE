const express = require('express');
const router = require('./routes/index')
const cors = require('cors');
const connectDB = require('./config/connectDB');
require('dotenv').config();


const port = 8000 || process.env.PORT
const app = express();
app.use(cors({
    origin : process.env.FRONTEND_URL,
    optionsSuccessStatus: 200,
    credentials : true
}))

app.use('/api',router)

app.get('/',(request,response)=>{
    response.json({
        message : "Server running at " + PORT
    })
})


app.listen(port,() =>{
    console.log(`listening on port ${port}`);
});

connectDB().then(()=>{
    server.listen(PORT,()=>{
        console.log("server running at " + port)
    })
})