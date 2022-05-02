import testdatabase from '../../data/testdatabase'

export default async function handler(req, res) {
    const method = req.method;
    const exam = req.body;
    if (method === "POST") {
        try {
            testdatabase.push({
                examName: exam.examName,
                accessCode: exam.accessCode,
                questions: exam.questions,
                correctAnswers: exam.correctAnswers
            });
            res.status(200).send({ response: true });
        } catch (error) {
            res.status(500).send({ response: "Oops, something went wrong!" })
        }
    } else {
        res.status(404);
    }
}