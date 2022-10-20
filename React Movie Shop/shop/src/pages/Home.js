import React from 'react';
import '../css/styles.css';
import '../css/bootstrap.css';
import { Link } from 'react-router-dom';
// will any of these work?
<link rel="preconnect" href="https://fonts.googleapis.com"></link>;
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>;
<link href="https://fonts.googleapis.com/css2?family=Merriweather&family=Montserrat&family=Sacramento&display=swap" rel="stylesheet"></link>;

class Home extends React.Component {
  render() {
    return (
    <main>
    <div class="login">
    <form class="form" id="login">
        <h1 class="form__title">Login</h1>
        <div class="form__message form__message--error"></div>
        <div class="form__input-group">
            <input type="text" class="form__input" autofocus placeholder="Username or email"/>
            <div class="form__input-error-message"></div>
        </div>
        <div class="form__input-group">
            <input type="password" class="form__input" autofocus placeholder="Password"/>
            <div class="form__input-error-message"></div>
        </div>

        
        <p class="form__text">
                <button type="form__button" class="btn btn-primary btn form__buttonS">
                <Link to="/Home" className='btn btn-primary'>Sign In</Link>
                </button>
                <button type="button" class="btn btn-success form__buttonS" >
                    <Link to="/Signup" className='btn btn-success'>Sign Up</Link>
                </button>
            </p>
        <p>
                <button type="button" class="btn btn-danger form__button" >
                    <Link to="/ForgotPW" className='btn btn-danger'>Forgot Password</Link>
                </button>               
            {/* <button type='button' class=" form__button btn btn-danger">
                <a href='ForgotPW'>Forgot Password</a>
            </button> */}
        </p>
            </form>
      </div>
  </main>
      );
  }
}

export default Home