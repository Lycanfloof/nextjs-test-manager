import Router from 'next/router'

export default function User({ userData }) {
    return (
        <div>
            <p>Hey {userData.username}!</p>
            <p>You're a {userData.accountType}!</p>
            <button onClick={() => goBack()}>Go back</button>
        </div>
    )
}

let goBack = () => {
    Router.push("http://localhost:3000/menu");
}



User.getInitialProps = async () => {
    let currentUser = await fetch("http://localhost:3000/api/currentuser");
    currentUser = await currentUser.json();
    console.log(currentUser);
    const user = await fetch("http://localhost:3000/api/obtainuser/" + currentUser.response.currentUser);
    const result = await user.json();
    return { userData: result.response }
}