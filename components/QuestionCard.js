import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Router from 'next/router';

export default function QuestionCard({questionStatement, option1, option2, option3, option4}){
  return(
    <div>
      <h1>{questionStatement}</h1>
      <form>
        <input type="radio" id="answer1" name="fav_language" value="HTML"></input>
        <label for="html">{option1}</label><br></br>

        <input type="radio" id="answer2" name="fav_language" value="HTML"></input>
        <label for="answer2">{option2}</label><br></br>

        <input type="radio" id="answer3" name="fav_language" value="HTML"></input>
        <label for="answer3">{option3}</label><br></br>

        <input type="radio" id="answer4" name="fav_language" value="HTML"></input>
        <label for="answer4">{option4}</label><br></br>

      </form>
      
    </div>
  )
}