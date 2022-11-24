const {Server} = require("socket.io"); // REQUIRING SOCKET.IO SERVER
const http = require('http');
const app = require("./http");
const {HOST, PORT} = require('./config');


const server = http.createServer(app); //http server
const io = new Server(server, {
    cors: {
        origin: `http://${HOST}:3000`, //FRONTEND LOCATION WITH REACT
        methods: ["GET", "POST"], //METHODS WE ARE ACCEPTING (PROPERTIES AND FUNCTIONS WITH COORS
    },
});

const userMap = {}; //maps the socket id to a username
const messages = []; // array that contains all messages sent by users

io.on("connection", (socket) => {
    console.log(`User Connected: ${socket.id}`);
    socket.join("the-room"); // whenever someone joins the room: they are added
    socket.on("username", data => { //User writes name
        userMap[socket.id] = data.name; //store name here
        if (data.name) {
            io.to("the-room").emit("message_history", messages); // sends whole history of messages to new user
        }
        console.log(data.name, "is behind", socket.id); //this user is behind that socket id
    }); //keeps track of the username
    socket.on("send_message", (data) => {
        console.log("send_message", data);
        messages.push({
            ...data,
            from: userMap[socket.id],
        });
        io.to("the-room").emit("receive_message", {
            ...data,
            from: userMap[socket.id],
        });
    });
});

module.exports.server = server;
module.exports.io = io;