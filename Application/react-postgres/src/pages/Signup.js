import React, {Fragment, useState} from 'react';
// import '../css/styles.css';
// import '../css/bootstrap.css';
import { Link } from 'react-router-dom';
// will any of these work?
// <link rel="preconnect" href="https://fonts.googleapis.com"></link>;
// <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>;
// <link href="https://fonts.googleapis.com/css2?family=Merriweather&family=Montserrat&family=Sacramento&display=swap" rel="stylesheet"></link>;

const Signup = () => 
{
        // needed to make changes to the state
        const [username, setUsername] = useState("")
        const [password, setPassword] = useState("")
        const [email, setEmail] = useState("")
        const onSubmitForm = async e => {
            // prevents page from refreshing
            e.preventDefault()
            try {
                const body = { username }
                const response = await fetch("http://localhost:3001/Signup",{
                    method: "POST",
                    headers: { "Content-Type": "application/json"},
                    body: JSON.stringify(body)
                })
                console.log(response)
                
            } catch (err) {
                console.error(err.message)
            }
        }

      return (
    <main>
        {/* for my create an account form how to I post data to my database??? */}
        <div className="login">
            <form className="form" id="login" onSubmit={onSubmitForm}>
                <h1 className="form__title">Create Account</h1>
                <div className="form__message form__message--error"></div>
                <div className="form__input-group"></div>
                <div className="form__input-group">
                    <input name="username" className="form__input" autoFocus placeholder="Username"/>
                    <div className="form__input-error-message"></div>
                </div>
                <div className="form__input-group">
                    <input className="form__input" autoFocus placeholder="Email Address" name="email"/>
                    <div className="form__input-error-message"></div>
                </div>
                <div className="form__input-group">
                    <input className="form__input" autoFocus placeholder="Password" name="password"/>
                    <div className="form__input-error-message"></div>
                </div>
                <div className="form__input-group">
                    <input className="form__input" autoFocus placeholder="Confirm Password"/>
                    <div className="form__input-error-message"></div>
                </div>
                <p className="form__text">
                <button type="button" className="btn btn-success btn form__button" >Submit
                </button>
                </p> 
                {/* <p className="form__text">
                <button type="button" className="btn btn-success btn form__button"  type="submit">Continue</button>
                </p> */}
                <p className="form__text">
                <button type="button" className="btn btn-primary btn form__button" >
                    <Link to="/"  className='btn btn-primary'>Existing user? Sign-in</Link>
                </button>
                </p>
                <p className="form__text">
                <button type="button" className="btn btn-danger btn form__button" >
                    <Link to="/"  className='btn btn-danger'>Cancel</Link>
                </button>
                </p> 
        {/* <p>               
            <button type='button' className=" form__button btn btn-danger">
                <a href='/ForgotPW'>Forgot Password</a>
            </button>
        </p> */}
            </form>
      </div>
    </main>
    );
}

export default Signup;

