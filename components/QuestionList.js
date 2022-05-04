import QuestionCard from "./QuestionCard";

export default function QuestoinList({questions}){
  return(
    <div>
      <ul>
        {questions.map((question)=>(
          <li key={question.questionCode}>
            <QuestionCard {...question} />
          </li>
        ))}
      </ul>
    </div>
  )
}