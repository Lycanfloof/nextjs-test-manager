import QuestionCard from "./QuestionCard";
import Button from 'react-bootstrap/Button';
import Router from 'next/router';

export default function QuestoinList({questions}){
  const changeRoute = () =>{
    Router.push("http://localhost:3000/menu");
  }
  return(
    <div>
      <ul>
        {questions.map((question)=>(
          <li key={question.questionCode}>
            <QuestionCard {...question} />
          </li>
        ))}
      </ul>
      <br/>
      <Button className="leftmarg-1" variant='dark' onClick={changeRoute}>Solve exam</Button>
    </div>
  )
}