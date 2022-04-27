import Router from 'next/router'

let state = {
  username: "",
  password: ""
}

export default function login() {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Username:</label>
        <input required placeholder="username" type="text" name="username" onChange={handleInputChange}></input>
        <br />
        <label>Password:</label>
        <input required placeholder="password" type="password" name="password" onChange={handleInputChange}></input>
        <br />
        <button type="submit">Log in!</button>
      </form>
      <button onClick={redirectToRegisterForm}>Sign in!</button>
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
  console.log(resultLogin);
  if (resultLogin) {
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