const express= require("express")
const app=express();
app.post("/get-data",(req,res)=>{
    res.status(200).send({"message":"post method run suceesfully"})
})
app.get("/get-data",(req,res)=>{
    res.status(200).send({"message":"get method run suceesfully"})
})
app.put("/get-data",(req,res)=>{
    res.status(200).send({"message":"put method run suceesfully"})
})
app.delete("/get-data",(req,res)=>{
    res.status(200).send({"message":"delete method run suceesfully"})
})
app.options("/get-data",(req,res)=>{
    res.status(200).send({"message":"options method run suceesfully"})
})
app.listen(8000,console.log("run on port 8000"));