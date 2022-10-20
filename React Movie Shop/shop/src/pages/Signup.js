import React, {Fragment, useState} from 'react';
import '../css/styles.css';
import '../css/bootstrap.css';
import { Link } from 'react-router-dom';
// will any of these work?
<link rel="preconnect" href="https://fonts.googleapis.com"></link>;
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>;
<link href="https://fonts.googleapis.com/css2?family=Merriweather&family=Montserrat&family=Sacramento&display=swap" rel="stylesheet"></link>;

class Signup extends React.Component 
{
    render() {
      return (
    <main>
        {/* for my create an account form how to I post data to my database??? */}
        <div class="login">
            <form class="form" id="login">
                <h1 class="form__title">Create Account</h1>
                <div class="form__message form__message--error"></div>
                <div class="form__input-group"></div>
                <div class="form__input-group">
                    <input name="username" class="form__input" autofocus placeholder="Username"/>
                    <div class="form__input-error-message"></div>
                </div>
                <div class="form__input-group">
                    <input class="form__input" autofocus placeholder="Email Address" name="email"/>
                    <div class="form__input-error-message"></div>
                </div>
                <div class="form__input-group">
                    <input class="form__input" autofocus placeholder="Password" name="password"/>
                    <div class="form__input-error-message"></div>
                </div>
                <div class="form__input-group">
                    <input class="form__input" autofocus placeholder="Confirm Password"/>
                    <div class="form__input-error-message"></div>
                </div>
                <p class="form__text">
                <button type="button" class="btn btn-success btn form__button" >
                    <Link to="/"  className='btn btn-success'>Submit</Link>
                </button>
                </p> 
                {/* <p class="form__text">
                <button type="button" class="btn btn-success btn form__button"  type="submit">Continue</button>
                </p> */}
                <p class="form__text">
                <button type="button" class="btn btn-primary btn form__button" >
                    <Link to="/"  className='btn btn-primary'>Existing user? Sign-in</Link>
                </button>
                </p>
                <p class="form__text">
                <button type="button" class="btn btn-danger btn form__button" >
                    <Link to="/"  className='btn btn-danger'>Cancel</Link>
                </button>
                </p> 
        {/* <p>               
            <button type='button' class=" form__button btn btn-danger">
                <a href='/ForgotPW'>Forgot Password</a>
            </button>
        </p> */}
            </form>
      </div>
    </main>
    );
}
}

export default Signup;