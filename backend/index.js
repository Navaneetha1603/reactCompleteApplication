const express=require("express");
const cors=require("cors");
const bodyParser=require("body-parser");
const mongoose=require("mongoose");
const userRoutes=require("./router/userRoutes");
const app=express();
app.use(bodyParser.json());
app.use(cors());

var url="mongodb+srv://mindtree:mindtree@cluster0.wuc4i.mongodb.net/reactUser?retryWrites=true&w=majority"
mongoose.connect(url);
mongoose.connection.on('connected',()=>{
    console.log("connected");
})
const PORT=process.env.PORT | 2300;
app.get("/test",(req,res)=>{
    res.send("hello");
})
app.use("/",userRoutes);

app.listen(PORT,()=>{
    console.log("express is running on port 2300");
})