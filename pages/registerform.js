import Router from 'next/router'

let state = {
    username: "",
    password: "",
    accountType: ""
}

export default function register() {
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Username:</label>
                <input required placeholder="username" type="text" name="username" onChange={handleInputChange}></input>
                <br />
                <label>Password:</label>
                <input required placeholder="password" type="password" name="password" onChange={handleInputChange}></input>
                <br />
                <label>Account Type:</label>
                <select required name="account-type" onChange={handleInputChange}>
                    <option value="v1">Teacher</option>
                    <option value="v2">Student</option>
                </select>
                <br />
                <button type="submit">Sign in!</button>
            </form>
            <button onClick={redirectToLogInForm}>Log in!</button>
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
    console.log(resultRegister);
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