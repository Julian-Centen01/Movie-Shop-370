import user1 from "../../images/user1.png";

const ChatFriends = (props) => {
    return <aside>
        <h1>FRIEND LIST</h1>
        {props.friends?.map(friend => { //js map function for arrays to loop over items/entries: and maps it to the div element
            return <div className="card bg-light mb-30" key={Math.random()}
                        onClick={() => props.selectFriend?.(friend)}>
                <img src={user1} className="card-img-top with-small" alt="profile pic"/>
                <div className="card-body">
                    <h5 className="card-title">{friend.username}</h5>
                </div>
            </div>
        })}
    </aside>;
};

export default ChatFriends;