const express = require('express')
const add = express()
app.get('/' , (req , res)=>{

   res.setHeader('Content-Type','text/html');
   res.end('<h1>About page</h1>')

})
const PORT = 5000
app.listen(PORT);
console.log("server is runpost :",PORT)