import Router from 'next/router'
import React from 'react'

export default function menu({ testdatabase }) {
    return (
        <div>
            <div>
                <label>
                    Exam list - Click on 'em!
                </label>
            </div>
            <br />
            <div id="exam-list">
                <ShowExamList testdatabase={testdatabase.response} />
            </div>
            <br />
            <div id="user-info">
                <ShowUser />
            </div>
        </div>
    )
}

menu.getInitialProps = async () => {
    //It would be preferable to find a way to put the relative path in this fetch().
    const databaseTest = await fetch("http://localhost:3000/api/obtaintestdatabase");
    const resultDBTest = await databaseTest.json();
    return { testdatabase: resultDBTest }
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
                <button onClick={this.showUser}>User Information</button>
            </div>
        )
    }
}

let getCurrentUser = async e => {
    const api = await fetch("api/currentuser");
    const currentUser = await api.json();
    return currentUser.response;
}
