import QuestoinList from "../../components/QuestionList";
export default function Exam({ examData }) {

  //This doesn't work with tests created with the program. We gotta check it out!
  //We also want to display the correct amount of questions.

  /*let array = [];

  for (let i = 0; i < examData.questions.length; i++) {
    let question = examData.questions[i];
    let aux = (
      <div key={examData.accessCode + i}>
        <p>{String.fromCharCode(i + 65) + "." + " " + question.statement}</p>
        <form>
          <input type="radio" />
          <label name="answerA">{question.options[0]}</label>
          <br />
          <input type="radio" />
          <label name="answerB">{question.options[1]}</label>
          <br />
          <input type="radio" />
          <label name="answerC">{question.options[2]}</label>
          <br />
          <input type="radio" />
          <label name="answerD">{question.options[3]}</label>
        </form>
        <br />
      </div>
    )

    array[i] = aux;
  }*/

  return (
    <div>
      <div>
        Name: {examData.title}
        <br />
        Code: {examData.code}
      </div>
      <br/>
      <QuestoinList questions={examData.questions}/>
    </div>
  )
}

Exam.getInitialProps = async (context) => {
  const path = context.asPath.split('/');
  let finalPartPath = path[path.length - 1];
  console.log(finalPartPath);

  const exam = await fetch("http://localhost:3000/api/obtaintest/" + path[path.length - 1]);
  const result = await exam.json();

  let examsData = await fetch("http://localhost:3000/api/ExamsDatabase");
  const examsInfo = await examsData.json();
  let indexExam = examsInfo.response.findIndex(element => element.code == finalPartPath);
  console.log(examsInfo.response[indexExam]);
  
  //console.log(examsInfo.response);

  return { examData: examsInfo.response[indexExam] }
}