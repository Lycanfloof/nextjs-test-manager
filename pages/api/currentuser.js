import currentUser from '../../data/currentuser.json'
import db from '../../util/database';

export default async function handler(req, res) {
  let dataDatabase = await db.query("SELECT * FROM USERS");
  let dataUsers = dataDatabase.rows;  
  let userIndex = dataUsers.findIndex(element => element.name == currentUser.currentUser);
    try {
        res.status(200).send({ response: dataUsers[userIndex] });
    } catch (error) {
        res.status(500).send({ response: "Oops, something went wrong!" })
    }
}