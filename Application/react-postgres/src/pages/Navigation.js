import React from 'react';
// import '../css/styles.css';
// import '../css/bootstrap.css';
import {Link} from 'react-router-dom';
import {Button, ButtonGroup, Col, Form, FormGroup, Image, Row, Stack} from "react-bootstrap";
// will any of these work?
// <link rel="preconnect" href="https://fonts.googleapis.com"></link>;
// <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>;
// <link href="https://fonts.googleapis.com/css2?family=Merriweather&family=Montserrat&family=Sacramento&display=swap" rel="stylesheet"></link>;
import Logo from '../images/Logo.png';
import top10 from '../images/top10.jpg';
import popcorn from '../images/popcorn.webp';
import BG from "../images/BG.jpg";

class Navigation extends React.Component {
    render() {
        return (
            <main>

                <nav
                    className=" navbar navbar-expand-lg navbar-light bg-primary bg-opacity-10  shadow-lg ">
                    <a className="navbar-brand" href="#">
                        <img src={Logo} alt=""/>
                    </a>
                    <ul className="navbar-nav text">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">SHOP </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">SEARCH A MOVIE</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">CHECKOUT</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">SIGN-IN</a>
                        </li>
                    </ul>

                </nav>


                <div className="container-fluid" style={{ backgroundImage: `url(${BG})` }}>

                    <div className="row">
                        <br/>
                        <br/>

                    </div>
                    <div className="row">

                        {/*FIRST COLUMN */}
                        <div className="col-sm text-center">
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <h1 className=" text-dark">GENRE</h1>
                            <br/>
                            <br/>
                            <h1 className=" text-dark">RATING</h1>
                            <br/>
                            <br/>
                            <h1 className=" text-dark">YEAR</h1>
                        </div>
                        {/*MIDDLE COLUMN */}
                        <div className="col-lg-6">

                            <h2 className=" text-dark text-center">Welcome to Groovy Movies!</h2>
                            <p className="lead text-center text-muted">The source for all the best movies</p>


                            <div className="card-group">
                                <div className="card">
                                    <img className="card-img-top" src={popcorn} alt="Card image cap"/>
                                    <div className="card-body">
                                        <h5 className="card-title"> YOUR FAVORITES</h5>
                                        <p className="card-text">Look through your list of favorite movies.</p>
                                        <p className="card-text"><small className="text-muted">Last updated 3 mins
                                            ago</small></p>
                                    </div>
                                </div>

                                <div className="card">
                                    <img className="card-img-top" src={top10} alt="Card image cap"/>
                                    <div className="card-body">
                                        <h5 className="card-title"> TOP 10 PICKS </h5>
                                        <p className="card-text">Movies are rated by real viewers.</p>
                                        <p className="card-text"><small className="text-muted">Last updated 3 mins
                                            ago</small></p>
                                    </div>

                                </div>

                            </div>


                        </div>

                        {/*LAST COLUMN */}
                        <div className="col-sm text-center">
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <h1 className=" text-dark">YOUR MOVIES</h1>
                            <br/>
                            <br/>
                            <h1 className=" text-dark">FRIEND MOVIES</h1>
                            <br/>
                            <br/>
                            <h1 className=" text-dark">WISHLIST</h1>
                            One of three columns
                        </div>
                    </div>
                </div>


            </main>
        );
    }
}

export default Navigation