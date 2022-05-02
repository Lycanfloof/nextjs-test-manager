import Router from 'next/router';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

let state = {
    username: "",
    password: "",
    accountType: ""
}

export default function register() {
    return (
        <div class="center positioned">
          <Card style={{ width: '30rem' }}>
            <Card.Body>
            <Card.Title class="padd">Nice to meet you! </Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Join us</Card.Subtitle>
            <br/>

              <Form onSubmit={handleSubmit}>
                <Form.Label>Username</Form.Label>
                <Form.Control required placeholder="username" type="text" name="username" onChange={handleInputChange}></Form.Control>
                <br/>
                <Form.Label>Password</Form.Label>
                <Form.Control required placeholder="password" type="password" name="password" onChange={handleInputChange}></Form.Control>
                <br/>
                <Form.Label>Account type</Form.Label>
                <Form.Select aria-label="Default select example" required name="account-type" onChange={handleInputChange}>
                  <option value="1">Teacher</option>
                  <option value="2">Student</option>
                </Form.Select>
                <br/>
                <div className="d-grid gap-2">
                  <Button variant="dark" size="lg" type="submit">Sign in!</Button>
                </div>
              </Form>
              <br/>
              <div className="d-grid gap-2">
                <Button variant="outline-dark" size="lg" onClick={redirectToLogInForm}>Log in!</Button>
              </div>
            </Card.Body>
          </Card>
        </div>
    )
}

let redirectToLogInForm = async e => {
    Router.push('/');
}

let handleSubmit = async e => {
    e.preventDefault();
    let config = {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(state)
    }
    let register = await fetch("/api/register", config);
    const resultRegister = await register.json();
    console.log(resultRegister.response);
}

let handleInputChange = async e => {
    switch (e.target.name) {
        case "username":
            state.username = e.target.value;
            break;
        case "password":
            state.password = e.target.value;
            break;
        case "account-type":
            state.accountType = e.target.value
    }
}