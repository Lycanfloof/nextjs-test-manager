import userdatabase from '../../data/userdatabase'

export default async function handler(req, res) {
    try {
        res.status(200).send({ response: userdatabase });
    } catch (error) {
        res.status(500).send({ response: "Oops, something went wrong!" })
    }
}