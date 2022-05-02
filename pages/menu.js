import Router from 'next/router'
import React from 'react'
import testdatabase from '../data/testdatabase'

export default function menu() {
    return (
        <div>
            <label>
                Exam list:
            </label>
            <div id="exam-list">
                <ShowExamList />
            </div>
        </div>
    )
}

menu.getInitialProps = async () => {
    //It would be preferable to find a way to put the relative path in this fetch().
    const database = await fetch("http://localhost:3000/api/obtaintestdatabase");
    const result = await database.json();
    return { testdatabase: result }
}

class ShowExamList extends React.Component {

    showExam(code) {
        Router.push("http://localhost:3000/exams/" + code);
    }

    getExams() {
        let examList = [];
        for (let i = 0; i < testdatabase.length; i++) {
            examList.push(
                <div key={testdatabase[i].accessCode}><a onClick={() => this.showExam(testdatabase[i].accessCode)}>{testdatabase[i].examName}</a></div>);
        }
        return examList;
    }

    render() {
        return (
            <div>
                {this.getExams()}
            </div>
        )
    }
}