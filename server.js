const express = require('express')
const app = express();
const mongoose =require('mongoose')
const cors = require('cors')

app.get('/',(req,res)=>{res.send("hello from server..")})

app.use(cors())
app.use(express.json())
const Db = async()=>{
    try {
        await mongoose.connect('mongodb+srv://seelirubina:Rubina30@cluster0.tc8jwmd.mongodb.net/SuperMarket?retryWrites=true&w=majority').then(
            ()=>{
                console.log("Connected to DataBase...")
            }
        )
    } catch (error) {
        console.log(error)
    }
}

Db();

app.listen(5000,()=>{console.log("Server is running on port 5000...")})