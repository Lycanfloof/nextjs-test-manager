import Router from 'next/router'
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

let state = {
  username: "",
  password: ""
}

export default function login() {
  return (
    <div className="center positioned">
      <Card style={{ width: '30rem' }}>
        <Card.Body>
          <Card.Title>Sign in to TesMa!</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            <Form.Text className="text-muted">
              C'mon, don't be shy!
            </Form.Text>
          </Card.Subtitle>
          <Form onSubmit={handleSubmit}>
            <Form.Control type="text" required placeholder="Username" name="username" onChange={handleInputChange}></Form.Control>
            <br />
            <Form.Control type="password" required placeholder="Password" name="password" onChange={handleInputChange}></Form.Control>
            <br />
            <div className="d-grid gap-2">
              <Button variant="dark" size="lg" type="submit">Sign in!</Button>
            </div>
            <br />
          </Form>
          <div className="d-grid gap-2">
            <Button variant="outline-dark" size="lg" onClick={redirectToRegisterForm}>Sign up!</Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  )
}

let redirectToRegisterForm = async e => {
  Router.push('/registerform');
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
  let login = await fetch("/api/login", config);
  const resultLogin = await login.json();
  console.log(resultLogin.response);
  if (resultLogin.response) {
    const store = await fetch("/api/storeuser", config);
    Router.push('/menu');
  }
}

let handleInputChange = async e => {
  switch (e.target.name) {
    case "username":
      state.username = e.target.value;
      break;
    case "password":
      state.password = e.target.value;
      break;
  }
}