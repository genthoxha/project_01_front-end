import React from "react";
import {Form, Button, Container} from "react-bootstrap";
import '../components/style.css'
import {Redirect, Router} from "react-router";
import {Link, Route} from "react-router-dom";

export default class Login extends React.Component {

    // state init with empty values
    state = {
        username: '',
        password: '',
    };

    handleRegistration(event) {

    }


    render() {
        return (
            <div className="row d-flex justify-content-center fadeInDown">
                <div className="col-md-3 m-5">
                    <Form>
                        <Form.Group controlId="formBasicPhoneNumber">
                            <Container>
                                <label className="text-center">Login</label>
                            </Container>
                            <Form.Control
                                className="m-2"
                                type="text"
                                placeholder="username"
                                onChange={value => this.handleChange(value)}/>
                            <Form.Control
                                className="m-2"
                                type="password"
                                placeholder="password"
                                onChange={p => this.setState({password: p.target.value})}/>
                        </Form.Group>
                        <Button className="btn btn-success m-2 btn-block" type="submit"
                                onClick={() => this.handleLogin()}>
                            Login
                        </Button>
                    </Form>

                    <Link to='/register'>
                        <Button className="btn btn-success m-2 btn-block" type="button"
                                onClick={() => this.handleRegistration}>
                            Register
                        </Button>
                    </Link>
                </div>

            </div>
        )
    }
}
