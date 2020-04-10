import React from "react";
import { Form, Button } from "react-bootstrap";

export default class Login extends React.Component {
  state = {
    username: "",
    password: ""
  };

  handleChange(event) {
    this.setState({
      username: event.target.value
    });
  }

    handleChange(event) {
        this.setState({
            username: event.target.value,
        });
    }

    render() {
        return (
            <div className="row d-flex justify-content-center">
                <div className="col-md-3 m-5">
                    <Form>
                        <Form.Group controlId="formBasicPhoneNumber">
                            <Form.Control
                                className="m-2"
                                type="text"
                                placeholder="Enter email or username"
                                onChange={value => this.handleChange(value)}/>
                            <Form.Control
                                className="m-2"
                                type="password"
                                placeholder="Password"
                                onChange={p => this.setState({password: p.target.value})}/>
                            <Form.Text className="text-muted m-2">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>
                        <Button className="btn btn-success m-2" type="submit" onClick={() => this.handleLogin()}>
                            Login
                        </Button>
                    </Form>
                </div>

            </div>
        )
    }
}
