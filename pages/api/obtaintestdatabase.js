import testdatabase from '../../data/testdatabase'

export default async function handler(req, res) {
    try {
        res.status(200).send({ response: testdatabase });
    } catch (error) {
        res.status(500).send({ response: "Oops, something went wrong!" })
    }
}