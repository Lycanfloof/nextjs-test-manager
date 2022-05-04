import testdatabase from '../../data/testdatabase'
import db from '../../util/database';

export default async function handler(req, res) {
    const method = req.method;
    const exam = req.body;
    if (method === "POST") {
        try {
            /*testdatabase.push({
                examName: exam.examName,
                accessCode: exam.accessCode,
                questions: exam.questions,
                correctAnswers: exam.correctAnswers
            });*/
            let tCodeData = await db.query("SELECT COUNT (t.testCode) FROM Tests t");
            const CurrentTestCode = tCodeData.rows[0].count;
            const newTestCode = parseInt(CurrentTestCode)+1;

            let qCodeData = await db.query("SELECT COUNT (q.questionCode) FROM Questions q");
            const CurrentQuestionCode = qCodeData.rows[0].count;
            const NewQuestionCode = parseInt(CurrentQuestionCode)+2;

            const numQuestions = exam.questions.length;           
            //create Test
            let response = await db.query('INSERT INTO Tests (title, description) VALUES ($1, $2)',[exam.examName,exam.examDescription])
            //Create questions
            for (let i = 0; i < numQuestions; i++) {
              let response2 = await db.query('INSERT INTO Questions (questionStatement, testCode, option1, option2, option3, option4, correctAnswer) VALUES ($1, $2,$3, $4, $5, $6, $7)',[exam.questions[i].statement, newTestCode, exam.questions[i].options[0], exam.questions[i].options[1], exam.questions[i].options[2], exam.questions[i].options[3], (exam.questions[i].options[4])])
            }

            res.status(200).send({ response: wasAdded });
        } catch (error) {
            res.status(500).send({ response: "Oops, something went wrong!" })
        }
    } else {
        res.status(404);
    }
}