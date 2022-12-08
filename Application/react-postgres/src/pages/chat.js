import io from 'socket.io-client';
import {useEffect, useState} from "react";
import UserProfile from "../components/chat/user-profile";
import ChatRoom from "../components/chat/chat-room";
import MessageSender from "../components/chat/message-sender";
import ChatFriends from "../components/chat/chat-friends";
import {BACKEND_HOST} from "../config";

const Chat = () => {
    const [user, setUser] = useState();
    const [selectedFriend, setSelectedFriend] = useState();
    const [friends, setFriends] = useState([
        // {name: "Madelyn student"},
        // {name: "Asia Griffith"}
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
        socket?.emit("username", {username: user?.username});
    }, [user?.id, socket]); //Watching for changes in the user variable
    useEffect(() => {
        const socket = io("http://localhost:3001");
        setSocket(socket);
        socket.on("user", user => setUser(user));
        socket.on("receive_message", message => setMessages([...messages, message]));
        // socket.on("message_history", messages => setMessages(messages));
        socket.on("messages:history", history => { /* listening for the messages:history event from the server*/
            // if (history.memberIds.includes(selectedFriend?.id)) {
            setMessages(history.messages);
            console.log(messages);
            setTimeout(()=>console.log(messages),1000);
            // }
        });
        return () => socket.disconnect();
    }, []);
    useEffect(() => {
        //Send the "messages:history:request" event to the server with the "selectedFriend" as data
        socket?.emit("messages:history:request", selectedFriend); //optional chaining ?.
    }, [selectedFriend, socket]); /* Dependencies: Whenever selected friend changes value -- useEffect will call that function*/

    return <>

        {/* CHAT RENDER*/}
        <div className="row">
            <div className="col">
                <ChatFriends friends={friends} selectFriend={setSelectedFriend}/>
            </div>


            <div className="col justify-content-center">

                <UserProfile
                    updateUser={user => socket?.emit("username", {username: user?.username})}/> {/*when someone changes the username we send the message to the socket.backend*/}
                <ChatRoom user={user} messages={messages}/>
                <MessageSender user={user} sendMessage={message =>
                    //Sending message to the backend and adding the target room -- enriching the message with more information
                    socket?.emit("send_message", {
                        ...message,
                        room: [user.id, selectedFriend?.id].sort().join("-")
                    })}/>
            </div>
        </div>

    </>
};

export default Chat;