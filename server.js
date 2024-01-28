//node server which will handle socket.io connection
// const io=
const io=Socketio(server);
// const http=require('socket.io')(8000);
const http=require("http");
const express=require("express");
const cors=require("cors");
const Socketio=require("socket.io");
const app=express();
const server=http.createServer(app);
const port=4500||process.env.PORT;
server.listen(port,()=>{
    console.log('server is working on ',port)
})
app.get('/',(req,res)=>{
    // res.send("hello world");
    res.sendFile(__dirname+'/index.html')
})
io.on('connection',(socket)=>{
    console.log('connected..');
})
const users={};

io.on('connection',socket=>{
    //new connection added to the socket
    socket.on('new-user-joined',name=>{
        console.log("new user ",name);
        users[socket.id]=name;
        socket.broadcast.emit('user-joined',name)
    });
    socket.on('send',message=>{
        socket.broadcast.emit('receive',{message:message,name:users[socket.id]})
    });
})