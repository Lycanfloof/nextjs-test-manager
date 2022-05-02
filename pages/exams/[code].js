export default function Exam({ examData }) {
  let array = [];

  for (let i = 0; i < examData.questions.length; i++) {
    let question = examData.questions[i];
    let aux = (
      <div key={examData.accessCode + i}>
        <p>{String.fromCharCode(i+65) + "." + " " + question.statement}</p>
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
      </div>
    )

    array[i] = aux;
  }

  return (
    <div>
      Name: {examData.examName}
      <br />
      Code: {examData.accessCode}
      <br />
      {array}
    </div>
  )
}

Exam.getInitialProps = async (context) => {
  const path = context.asPath.split('/'); 
  console.log(path[path.length-1]);
  const exam = await fetch("http://localhost:3000/api/obtaintest/" + path[path.length-1]);
  const result = await exam.json();
  return { examData: result.response }
}