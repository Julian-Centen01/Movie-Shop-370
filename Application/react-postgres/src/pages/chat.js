import io from 'socket.io-client';
import {useEffect, useState} from "react";
import UserProfile from "../components/chat/user-profile";
import ChatRoom from "../components/chat/chat-room";
import MessageSender from "../components/chat/message-sender";
import ChatFriends from "../components/chat/chat-friends";
import {BACKEND_HOST} from "../config";

const Chat = () => {
    const [user, setUser] = useState();
    const [friends, setFriends] = useState([
        {name: "Madelyn student"},
        {name: "Asia Griffith"}
    ]);
    const [socket, setSocket] = useState();
    const [messages, setMessages] = useState([
        // {author: "Asia", timestamp: Date.now(), content: "blahabladhfsh"},
        // {author: "Asia", timestamp: Date.now(), content: "blahabladhfsh"},
        // {author: "Asia", timestamp: Date.now(), content: "blahabladhfsh"},
    ]);
    useEffect(() => {
        fetch(`${BACKEND_HOST}/users/${user?.id || -1}/friends`) //getting friend data and translates the information into json and puts it in the friend component
            .then(response => response.json())
            .then(friends => setFriends(friends));
        // socket?.emit("username", {username: user?.username});
    }, [user, socket]); //Watching for changes in the user variable
    useEffect(() => {
        const socket = io("http://localhost:3001");
        setSocket(socket);
        socket.on("user", user => setUser(user));
        // socket.on("receive_message", message => setMessages([...messages, message]));
        // socket.on("message_history", messages => setMessages(messages));
        return () => socket.disconnect();
    }, []);

    return <>

        {/* CHAT RENDER*/}
        <div className="row">
            <div className="col">
                <ChatFriends friends={friends}/>
            </div>


            <div className="col justify-content-center">

                <UserProfile updateUser={user=>socket?.emit("username", {username: user?.username})}/> {/*when someone changes the username we send the message to the socket.backend*/}
                <ChatRoom user={user} messages={messages}/>
                <MessageSender user={user}
                               sendMessage={message => socket?.emit("send_message", message)}/>
            </div>
        </div>

    </>
};

export default Chat;