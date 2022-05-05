import Router from 'next/router'
import { options } from 'pg/lib/defaults'
import React, { Component } from 'react'
import ExamList from '../components/ExamList';
import Button from 'react-bootstrap/Button';

export default function menu({ testdatabase }) {
    return (
        <div className=''>
            <div>
            <br />
                <h1 className='leftmarg-1'>
                    Exam list - Click on 'em!
                </h1>
            </div>
            <br />
            <div id="user-info">
                <ShowUser />
            </div>
            <br />
            <div id="exam-list">
              {console.log(testdatabase)}
              <ExamList tests={testdatabase}/>
            </div>
            <br />
            
        </div>
    )
}


menu.getInitialProps = async () => {
    //It would be preferable to find a way to put the relative path in this fetch().
    //const databaseTest = await fetch("http://localhost:3000/api/obtaintestdatabase");
    //const resultDBTest = await databaseTest.json();
    
    //console.log(resultDBTest);

    let examsData = await fetch("http://localhost:3000/api/ExamsDatabase");
    const examsInfo = await examsData.json();
    //console.log(examsInfo);
    
    //console.log(examsInfo.response);

    return { testdatabase: examsInfo.response }
}

class ShowExamList extends React.Component {

    constructor(props) {
        super(props);
    }

    addExam() {
        Router.push("http://localhost:3000/examform/");
    }

    showExam(code) {
        Router.push("http://localhost:3000/exams/" + code);
    }

    getExams() {
        let testdatabase = this.props.testdatabase;
        let examList = [];
        for (let i = 0; i < testdatabase.length; i++) {
            examList.push(
                <div key={testdatabase[i].accessCode}>
                    <a onClick={() => this.showExam(testdatabase[i].accessCode)}>
                        {testdatabase[i].examName}
                    </a>
                </div>);
        }
        return examList;
    }

    render() {
        return (
            <div>
                {this.getExams()}
                <br />
                <button onClick={() => this.addExam()}>+</button>
            </div>
        )
    }
}

class ShowUser extends React.Component {

    constructor(props) {
        super(props);
    }

    showUser() {
        Router.push("http://localhost:3000/users/" + getCurrentUser());
    }

    render() {
        return (
            <div>
                <Button className='leftmarg' variant='outline-dark' onClick={this.showUser}>User Information</Button>
            </div>
        )
    }
}

let getCurrentUser = async e => {
    const api = await fetch("api/currentuser");
    const currentUser = await api.json();
    return currentUser.response;
}
