export default async function handler(req, res) {
    
    const fs = require('fs');

    const username = req.body.username;
    const user = {
        "currentUser": username
    };

    const data = JSON.stringify(user);

    fs.writeFile('data/currentuser.json', data, (err) => {
        if (err) {
            throw err;
        }
        console.log("JSON data is saved.");
    });

    res.status(200).send({ response: null });
}