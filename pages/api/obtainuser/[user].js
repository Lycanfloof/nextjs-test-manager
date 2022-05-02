import userdatabase from '../../../data/userdatabase'

export default async function handler(req, res) {
        try {
            let username = req.query.user;
            let user = userdatabase.find(element => element.username == username);
            res.status(200).send({ response: user });
        } catch (error) {
            res.status(500).send({ response: "Oops, something went wrong!" })
        }
}