import Router from 'next/router'
import React from 'react'

export default function menu({ testdatabase }) {
    return (
        <div>
            <label>
                Exam list:
            </label>
            <div id="exam-list">
                <ShowExamList testdatabase={testdatabase.response} />
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

    constructor(props) {
        super(props);
    }

    showExam(code) {
        Router.push("http://localhost:3000/exams/" + code);
    }

    getExams() {
        let testdatabase = this.props.testdatabase;
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