import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Router from 'next/router';
import { Component } from 'react';


export default function ExamCard({title, description,code, questions}){

  const changeRoute = () =>{
    Router.push("http://localhost:3000/exams/" + code);
  }

  return(
    <div className='smallpadd'>
      <Card border="dark" style={{ width: '40rem' }}>
      <Card.Header><strong>{title}</strong></Card.Header>
        <Card.Body>
          <Card.Subtitle className="mb-2 text-muted">{description}</Card.Subtitle>
          <h6>Tests length: {questions.length} questions</h6>
          <br></br>
          <Button variant='dark' onClick={changeRoute}>Solve exam</Button>
          </Card.Body>
      </Card>
      
    </div>
  )
}

