import userdatabase from '../../data/userdatabase'

export default async function handler(req, res) {
    const method = req.method;
    const body = req.body;
    if (method === "POST") {
        try {
            let canRegister = false;
            let userIndex = userdatabase.findIndex(element => element.username == body.username && element.password == body.password);
            if (userIndex == -1) {
                canRegister = true;
                userdatabase.push({
                    username: body.username,
                    password: body.password,
                    accountType: body.accountType
                });
            }
            res.status(200).send({ response: canRegister });
        } catch (error) {
            res.status(500).send({ response: "Oops, something went wrong!" })
        }
    } else {
        res.status(404);
    }
}