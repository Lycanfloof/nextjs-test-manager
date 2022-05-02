import Router from 'next/router';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

let state = {
  username: "",
  password: "",
  accountType: "Teacher"
}

export default function register() {

  return (
    <div className="center positioned">
      <Card style={{ width: '30rem' }}>
        <Card.Body>
          <Card.Title>Sign up!</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            <Form.Text className="text-muted">
              Let's make great things together!
            </Form.Text>
          </Card.Subtitle>
          <Form onSubmit={handleSubmit}>
            <Form.Control required placeholder="Username" type="text" name="username" onChange={handleInputChange}></Form.Control>
            <br />
            <Form.Control required placeholder="Password" type="password" name="password" onChange={handleInputChange}></Form.Control>
            <br />
            <Form.Select required aria-label="Default select example" name="account-type" onChange={handleInputChange}>
              <option value="Teacher">Teacher</option>
              <option value="Student">Student</option>
            </Form.Select>
            <br />
            <div className="d-grid gap-2">
              <Button variant="dark" size="lg" type="submit">Sign in!</Button>
            </div>
          </Form>
          <br />
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
      break;
  }
}