const express = require("express");
const app = express();

app.use(express.urlencoded({extended:true}))


const getCurrentDate = ()=>{
    return new Date().toLocaleString("vi-VN");
}


app.post('/survey',(req,res)=>{
    var jobInput = req.body.job;
    var nameInput = req.body.txtName;
    res.setHeader('Content-Type','text/html')
    res.write(`<h1>Thank you ${nameInput} -${job} for participating the survey! </h1>`)
    res.end(`Current date: ${getCurrentDate()}`)
})
app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/views/home.html')
})
app.get('/About',(req,res)=>{
    res.setHeader('Content-Type','text/html')
    res.end('<h1>About page</h1>')
})
const PORT = 5000;
app.listen(PORT);
console.log('Sever is running on Port: ' ,PORT);