const express=require('express');
const cors=require('cors');
const mongoose=require('mongoose');
require('dotenv').config();
const app=express();
const port=process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// create db connection
const password=encodeURIComponent('yGRz7LjqCo1havKU');
const uri=`mongodb+srv://asif:${password}@cluster0-u4yna.mongodb.net/amazonTestData?retryWrites=true&w=majority`
mongoose.connect(uri,{useNewUrlParser:true,useCreateIndex:true});
const connection=mongoose.connection;
connection.once('open',()=>{
    console.log('MongoDB database connection established successfully...');
});
// adding routing
const amazonDataRouter=require('./routes/amazonData');
app.use('/amazon',amazonDataRouter);
app.listen(port,()=>{
    console.log(`Server is running on ports : ${port}`);
})
