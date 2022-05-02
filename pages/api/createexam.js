import testdatabase from '../../data/testdatabase'

export default async function handler(req, res) {
    const method = req.method;
    const exam = req.body;
    if (method === "POST") {
        try {
            let wasCreated = false;
            const testIndex = testdatabase.findIndex(element => element.accessCode == exam.accessCode);
            if (testIndex == -1 && exam.questions.length > 0) {
                wasCreated = true;
                testdatabase.push({
                    examName: exam.examName,
                    accessCode: exam.accessCode,
                    questions: exam.questions,
                    correctAnswers: exam.correctAnswers
                });
            }
            res.status(200).send({ response: wasCreated });
        } catch (error) {
            res.status(500).send({ response: "Oops, something went wrong!" })
        }
    } else {
        res.status(404);
    }
}