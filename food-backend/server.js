const express=require("express");
const cors=require("cors");
const app=express();
let orders = [];
app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Backend is Working");
});
app.post("/user",(req ,res)=>{
    console.log(req.body);
    orders.push(req.body);
    res.json({
    message:"User added successfully",
    user:req.body
    });
    
});
app.get("/orders", (req, res) => {
    res.json(orders);
});
app.listen(5000,()=>{
    console.log("Server runing on port 5000");
});