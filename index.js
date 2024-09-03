//const Laptop = require("./second");
//console.log("the details of the laptop is:",Laptop);
/*const simple = require("./modulessecond");
simple()*/
const http= request('http');
const port = process.env.port;

const server = http.createServer((req,res)=>{
    res.statusCode=200;
    res.setHeader('Content-Type','text/html')
    res.end('<h1>This is code with some boy</h1> <p>Hey this is the way to rock the world</p>')
})

server.listen(port,()=>{
   console.log( `Server i slistening on port ${port}`)
})