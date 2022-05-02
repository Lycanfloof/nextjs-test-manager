import db from '../../util/database';

export default async function handler(req, res) {
    const method = req.method;
    const body = req.body;
    if (method === "POST") {
        try {
            let canRegister = false;
            //Get the db object
            let dataDatabase = await db.query("SELECT * FROM USERS");
            //get the rows in the USERS table
            let dataUsers = dataDatabase.rows;
            let userIndex2 = dataUsers.findIndex(element => element.name == body.username && element.password == body.password);          
            //let userIndex = userdatabase.findIndex(element => element.username == body.username && element.password == body.password);
            if (userIndex2 == -1) {
                canRegister = true;
                /*userdatabase.push({
                    username: body.username,
                    password: body.password,
                    accountType: body.accountType
                });*/

                try {
                  
                  //inserts new instance to the USERS table
                  let response = await db.query('INSERT INTO USERS(NAME,PASSWORD,ACCOUNTTYPE) VALUES ($1, $2,$3)',[body.username,body.password,body.accountType])
                  
                  res.send({
                    response: "Hey"
                  });
                } catch (error) {
                  console.log(error);
                }
            }
            res.status(200).send({ response: canRegister });
        } catch (error) {
            res.status(500).send({ response: "Oops, something went wrong!" })
        }
    } else {
        res.status(404);
    }
}