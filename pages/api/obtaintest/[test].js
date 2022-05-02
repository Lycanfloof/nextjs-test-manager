import testdatabase from '../../data/testdatabase'

export default async function handler(req, res) {
        try {
            let testName = req.query.test;
            let test = testdatabase.find(element => element.examName == testName);
            res.status(200).send({ response: test });
        } catch (error) {
            res.status(500).send({ response: "Oops, something went wrong!" })
        }
}