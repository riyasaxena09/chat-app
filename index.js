const express=require('express')
const fs=require('fs')
const parser=require('body-parser')
const path=require('path')
const app=express();
const arr=[];
const msg=[];
app.use(parser.urlencoded({extended:false}))
app.get('/login',(req,res,next)=>{
    res.sendFile(path.join(__dirname,"views","form.html"))
})
app.post('/',(req,res,next)=>{
    res.sendFile(path.join(__dirname,"views","send.html"))
    arr.push(req.body)
    fs.appendFile("msg.text",arr[0].name,()=>{
        console.log("create name")
    });
})
app.post('/send',(req,res,next)=>{
    res.send("done");
    msg.push(req.body)
    fs.appendFile("msg.text",msg[0].msg,()=>{
        console.log("writen msg")
    });
})
app.listen("5000",()=>{
    console.log('run')
})