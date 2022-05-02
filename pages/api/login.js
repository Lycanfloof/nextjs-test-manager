import userdatabase from '../../data/userdatabase'
import db from '../../util/database';

export default async function handler(req, res) {
    const method = req.method;
    const body = req.body;
    if (method === "POST") {
        try {
            let canLogin = false;

            //Get the db object
            let dataDatabase = await db.query("SELECT * FROM USERS");
            //get the rows in the USERS table
            let dataUsers = dataDatabase.rows;
            let userIndex2 = dataUsers.findIndex(element => element.name == body.username && element.password == body.password);

            //let userIndex = userdatabase.findIndex(element => element.username == body.username && element.password == body.password);
            if (userIndex2 != -1) {
                canLogin = true;
            }
            res.status(200).send({ response: canLogin });
        } catch (error) {
            res.status(500).send({ response: "Oops, something went wrong!" })
        }
    } else {
        res.status(404);
    }
}