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
    const database = await fetch("/api/obtaintestdatabase");
    const result = await database.json();
    return { testdatabase: result }
}

class ShowExamList extends React.Component {

    constructor(props) {
        super(props);
    }

    showExam(code) {
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