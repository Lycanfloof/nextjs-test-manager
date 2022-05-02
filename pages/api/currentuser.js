import currentUser from '../../data/currentuser.json'

export default async function handler(req, res) {
    try {
        res.status(200).send({ response: currentUser });
    } catch (error) {
        res.status(500).send({ response: "Oops, something went wrong!" })
    }
}