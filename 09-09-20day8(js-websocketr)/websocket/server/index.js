const WebSocket = require("ws");
const wss = new WebSocket.Server({port: 8082});
//ws refer to single connection to the server site 
//mutilple coonection --> muttiple ws object
//wss is refer to the actual server
wss.on("connection", ws =>
{
    console.log("new client connected");
    //send msg from web browser to server site
    ws.on("message", data=>{
        console.log('client has send us:'+data);
        

        //send back from  server to client
        ws.send(data.toUpperCase());
    });
    //listen close connection
    ws.on("close", () => {
        console.log("client has disconnected");
    });
});