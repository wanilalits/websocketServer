import { Server } from "socket.io";
import { createServer } from "http";

const httpserver = createServer();
const io = new Server(httpserver,{
    cors:{
        origin:"*",
    },
});
io.on("connection", (socket)=>{
    socket.emit('welcome', "welcome to channel");
    socket.on('msg', (data)=>{
        console.log('msg from client',data)
    })
})
httpserver.listen(3001,()=>{
    console.log("listen on 3001")}

);
