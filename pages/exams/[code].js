export default function Exam({examData}) {
  
  let exam = (
  <div>
    {examData.examName}
    <br/>
    {examData.accessCode}
    <br/>
  </div>);

    for (const question in examData.questions) {
      exam +=
      <div>
        <p>{question.statement}</p>
        <form>
          <input type="radio"/>
          <label for="answerA">{question.options.get(0)}</label>
          <br/>
          <input type="radio"/>
          <label for="answerB">{question.options.get(1)}</label>
          <br/>
          <input type="radio"/>
          <label for="answerC">{question.options.get(2)}</label>
          <br/>
          <input type="radio"/>
          <label for="answerD">{question.options.get(3)}</label>
        </form>
      </div>
    }

  return exam
}