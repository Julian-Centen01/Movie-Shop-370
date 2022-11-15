import io from 'socket.io-client';
import {useEffect, useState} from "react";
import UserProfile from "../components/chat/user-profile";
import ChatRoom from "../components/chat/chat-room";
import MessageSender from "../components/chat/message-sender";

const Chat = () => {
    const [user, setUser] = useState();
    const [socket] = useState(io.connect("http://localhost:3001"));
    const [messages, setMessages] = useState([
        // {author: "Asia", timestamp: Date.now(), content: "blahabladhfsh"},
        // {author: "Asia", timestamp: Date.now(), content: "blahabladhfsh"},
        // {author: "Asia", timestamp: Date.now(), content: "blahabladhfsh"},
    ]);
    socket.on("receive_message", message => setMessages([...messages, message]));
    socket.on("message_history", messages => setMessages(messages));
    useEffect(() => {
        socket.emit("username", {name: user?.username});
    }, [user, socket]); //Watching for changes in the user variable
    return <>
        <UserProfile updateUser={setUser}/>
        <ChatRoom user={user} messages={messages}/>
        <MessageSender user={user}
                       sendMessage={message => socket.emit("send_message", message)}/>
    </>
};

export default Chat;