const {Server} = require("socket.io"); // REQUIRING SOCKET.IO SERVER
const http = require('http');
const app = require("./http");
const {HOST} = require('./config');
const {findUserByUsername} = require('./models/movie_model');


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
        const username = data.username;
        findUserByUsername(username)
            .then(user => {
                userMap[socket.id] = user; //store name here
                io.to("the-room").emit("message_history", messages); // sends whole history of messages to new user
                console.log(username, "is behind", socket.id, "as user", user); //this user is behind that socket id
                socket.emit("user", user); //Backend finds user and lets front end know
            }); //keeps track of the username
        socket.on("send_message", (data) => {
            console.log("send_message", data);
            messages.push({
                ...data,
                from: userMap[socket.id].username,
            });
            io.to(data.room).emit("receive_message", {
                ...data,
                from: userMap[socket.id],
            });
        });
    });

    //Backend listening for "messages:history:request" in chat.js
    socket.on("messages:history:request", friend => {
        const issuer = userMap[socket.id];
        const {id: friendId, username:friendName} = friend ?? {}; // If friend is null or undefined just replaces it with this empty object

        socket.join([issuer?.id, friendId].sort().join("-")); //Takes userid and friend id sorts it and creates a name for the room
       //Sending an event back to the front end
        socket.emit("messages:history", {
            memberIds: [issuer?.id, friendId],
            messages: [
                {
                    content: "hi!",
                    timestamp: Date.now(),
                    author: friendName,
                },
                {
                    content: "Hello! How are you?!!",
                    timestamp: Date.now(),
                    author: issuer?.username,
                },
            ]
        });
    });
});

module.exports.server = server;
module.exports.io = io;