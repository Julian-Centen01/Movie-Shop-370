import {useRef} from "react";

export default (props) => {
    const username = useRef();

    return <header className="card">
        <h5 className="card-title">User Profile</h5>

        <div className="input-group">
            <input className="form-control" type="text" ref={username} placeholder="username"/>
            <button className="btn btn-primary" onClick={() => {
                props.updateUser({
                    username: username.current.value,
                });
            }}>save
            </button>
        </div>

    </header>
}