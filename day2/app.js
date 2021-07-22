const http = require('http')
const hostname = 'localhost'
const port = 5000; 
const server = http.createServer((req,res)=>{
    res.setHeader('Content-Type','text/html');
    switch(req.url){
        case"/home":
            res.writeHead(200);
            res.end("this home");
            break;
        case "about":
            res.writeHead(200);
            res.end("this about");
            break;
        default:
            res.end("khong tim thay")
    }
    console.log(new Date().getSeconds())
    res.end('<h1>hello World </h1>');
})
server.listen(port , hostname,()=>console.log('server is running',port))
