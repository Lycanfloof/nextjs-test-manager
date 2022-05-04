import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Router from 'next/router';
import { Component } from 'react';

export default function ExamCard({title, description,code}){

  const changeRoute = () =>{
    console.log('payasa');
  }

  return(
    <div>
      <h1>{title}</h1>
      <h4>{description}</h4>
      <button onClick={changeRoute()}>Solve exam</button>
    </div>
  )
}

