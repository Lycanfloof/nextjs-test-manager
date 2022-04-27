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

class ShowExamList extends React.Component {

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