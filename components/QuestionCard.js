import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Router from 'next/router';

export default function QuestionCard({questionStatement, option1, option2, option3, option4}){
  return(
    <div>
      <h1>{questionStatement}</h1>
      <h6>{option1}</h6>
      <h6>{option2}</h6>
      <h6>{option3}</h6>
      <h6>{option4}</h6>
    </div>
  )
}