import React, {Fragment, useState} from 'react';
import '../css/styles.css';
import '../css/bootstrap.css';
import { Link } from 'react-router-dom';
// import Navbar from '../Components/Navbar';
// will any of these work?
<link rel="preconnect" href="https://fonts.googleapis.com"></link>;
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>;
<link href="https://fonts.googleapis.com/css2?family=Merriweather&family=Montserrat&family=Sacramento&display=swap" rel="stylesheet"></link>;

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
                const body = { username,password,email }
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
        
            {/* <Navbar/> */}
        {/* for my create an account form how to I post data to my database??? */}
        <div className="login">
            <form className="form" id="login" onSubmit={onSubmitForm}>
                <h1 className="form__title">Create Account</h1>
                
                    <input 
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)}  
                        className="form__input" 
                        autoFocus placeholder="Username"
                    />
                    <div className="form__input-error-message"></div>
                    <input 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="form__input" 
                        autoFocus placeholder="Email Address" 
                    />
                    <div className="form__input-error-message"></div>
                    <input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} 
                        className="form__input" 
                        autoFocus placeholder="Password"
                    />
                    <div className="form__input-error-message"></div>
                    <input className="form__input" autoFocus placeholder="Confirm Password"/>
                    <div className="form__input-error-message"></div>
                    <p>
                <button className="btn btn-success btn form__button" >
                <Link to="/"  className='btn btn-success'>Sign up!</Link>
                </button>
                </p>
                <p>
                <button  className="btn btn-primary btn form__button" >
                    <Link to="/"  className='btn btn-primary'>Existing user? Sign-in</Link>
                </button>
                </p>
                <p>
                <button  className="btn btn-danger btn form__button" >
                    <Link to="/"  className='btn btn-danger'>Cancel</Link>
                </button>
                </p>
            </form>
      </div>
    </main>
    );
}

export default Signup;

