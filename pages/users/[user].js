export default function User({ userData }) {
    return (
        <div>
            <p>Hey {userData.username}!</p>
            <p>You're a {userData.accountType}!</p>
        </div>
    )
}

User.getInitialProps = async (context) => {
    let currentUser = await fetch("http://localhost:3000/api/currentuser");
    currentUser = await currentUser.json();
    console.log(currentUser);
    const user = await fetch("http://localhost:3000/api/obtainuser/" + currentUser.response.currentUser);
    const result = await user.json();
    return { userData: result.response }
}