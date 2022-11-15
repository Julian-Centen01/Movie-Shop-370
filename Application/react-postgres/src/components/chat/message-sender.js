import {useRef} from "react";

export default (props) => {
    const textbox = useRef();
    return <footer className="card">
        <div className="input-group input-group-sm">
            {/*<h5 className="card-title">Card title</h5>*/}
            <textarea placeholder="enter your text here"
                      disabled={!props.user?.username}
                      ref={textbox}
                      className="form-control"/>
            <button className="btn btn-primary btn-outline-secondary"
                    disabled={!props.user?.username} onClick={event => {
                props.sendMessage({
                    author: props.user.username,
                    timestamp: Date.now(),
                    content: textbox.current.value,
                });
                textbox.current.value = "";
            }}>send
            </button>
        </div>
    </footer>
}