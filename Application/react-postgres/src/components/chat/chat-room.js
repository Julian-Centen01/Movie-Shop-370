export default (props) => {
    return <fieldset className="card">
        <legend>Chat Room</legend>
        {props.messages.map(message => <article key={Math.random()}
            className={`alert alert-${props.user?.username==message.author?"primary":"dark"}`}>
            <header>
                <strong>{message.author}</strong>
                <small>{new Date(message.timestamp).toString()}</small>
            </header>
            <p>{message.content}</p>
        </article>)}
    </fieldset>
}