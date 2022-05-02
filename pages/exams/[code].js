import Router from 'next/router'
export default function Exam({examData}) {
  examData = examData.response;
  let exam = (

    <div>
      {examData.examName}
      <br/>
      {examData.accessCode}
      <br/>
    </div>);

    let array = [];

    for (let i = 0; i < examData.questions.length; i++) {
      let question = examData.questions[i];
      let aux =(
        <div>
        <p>{question.statement}</p>
        <form>
          <input type="radio"/>
          <label for="answerA">{question.options[0]}</label>
          <br/>
          <input type="radio"/>
          <label for="answerB">{question.options[1]}</label>
          <br/>
          <input type="radio"/>
          <label for="answerC">{question.options[2]}</label>
          <br/>
          <input type="radio"/>
          <label for="answerD">{question.options[3]}</label>
        </form>
      </div>
      )

      array[i] = aux;
    }

  return (
    <div>
      {examData.examName}
      <br/>
      {examData.accessCode}
      <br/>
      {array}
    </div>
    )
}

Exam.getInitialProps = async () => {
  //const path = Router.pathname.split();
  const exam = await fetch("http://localhost:3000/api/obtaintest/AAAA");
  const result = await exam.json();
  return { examData: result }
}