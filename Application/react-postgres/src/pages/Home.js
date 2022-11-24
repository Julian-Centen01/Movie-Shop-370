import React from 'react';
// import '../css/styles.css';
// import '../css/bootstrap.css';
import {Link} from 'react-router-dom';
import {Button, ButtonGroup, Col, Form, FormGroup, Row, Stack} from "react-bootstrap";
// will any of these work?
// <link rel="preconnect" href="https://fonts.googleapis.com"></link>;
// <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>;
// <link href="https://fonts.googleapis.com/css2?family=Merriweather&family=Montserrat&family=Sacramento&display=swap" rel="stylesheet"></link>;

class Home extends React.Component {
    render() {
        return (
            <main>


                <div className="container-lg">
                    <div className="text-center">
                        <h2>Login</h2>
                        <p className="lead">Login instructions blah</p>
                    </div>

                    <div className="row justify-content-center my-5">

                        <div className="col-8 col-lg-5">
                            <Form
                                className="border p-5 text-light bg-light k shadow-lg rounded"> {/*Padding for signin */} {/*ADD AN ONCLICK EVENT*/}
                                <FormGroup direction="horizontal" gap={2}>
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email"/>
                                </FormGroup>
                                <Row className="list-group-horizontal my-1">
                                    <Col>
                                        <Link className="btn btn-danger" to="/ForgotPW">
                                            Forgot Password
                                        </Link>
                                    </Col>
                                    <Col className={"text-end"}> {/*this puts the buttons aligned to the right*/}
                                        <ButtonGroup>
                                            <Button to="/Home" className='btn btn-primary'>Sign In</Button>
                                            <Button to="/Signup" className='btn btn-success'>Sign Up</Button>

                                        </ButtonGroup>
                                    </Col>


                                </Row>


                            </Form>

                        </div>

                    </div>


                </div>


                {/*    <div className="login">*/}
                {/*        <Form className="width-small">*/}
                {/*            <Form.Group>*/}
                {/*                <Form.Label>Email address</Form.Label>*/}
                {/*                <Form.Control type="email" placeholder="Enter email" />*/}
                {/*                <Form.Text className="text-muted">*/}
                {/*                    We'll never share your email with anyone else.*/}
                {/*                </Form.Text>*/}
                {/*            </Form.Group>*/}
                {/*        </Form>*/}
                {/*        <form className="form" id="login">*/}
                {/*            <h1 className="form__title">Login</h1>*/}
                {/*            <div className="form__message form__message--error"></div>*/}
                {/*            <div className="form__input-group">*/}
                {/*                <input type="text" className="form__input" autoFocus placeholder="Username or email"/>*/}
                {/*                <div className="form__input-error-message"></div>*/}
                {/*            </div>*/}
                {/*            <div className="form__input-group">*/}
                {/*                <input type="password" className="form__input" autoFocus placeholder="Password"/>*/}
                {/*                <div className="form__input-error-message"></div>*/}
                {/*            </div>*/}


                {/*            <ButtonGroup>*/}
                {/*                <Link to="/Home" className='btn btn-primary'>Sign In</Link>*/}
                {/*                <Link to="/Signup" className='btn btn-success'>Sign Up</Link>*/}
                {/*            </ButtonGroup>*/}
                {/*            <p>*/}
                {/*                <Link className="btn btn-danger" to="/ForgotPW">*/}
                {/*                    Forgot Password*/}
                {/*                </Link>*/}
                {/*                /!* <button type='button' className=" form__button btn btn-danger">*/}
                {/*   0 <a href='ForgotPW'>Forgot Password</a>*/}
                {/*</button> *!/*/}
                {/*            </p>*/}
                {/*        </form>*/}
                {/*    </div>*/}
            </main>
        );
    }
}

export default Home