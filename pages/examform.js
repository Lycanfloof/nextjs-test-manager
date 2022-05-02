import React from 'react'
import Router from 'next/router'

let handleSubmit = async (examName, accessCode, questionList) => {
    //We need to implement the submit logic.
    let state = {
        examName: examName,
        accessCode: accessCode,
        questions: questionList,
        correctAnswers: [0]
    }
    let config = {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(state)
    }
    let exam = await fetch("/api/createexam", config);
    const resultExam = await exam.json();
    console.log(resultExam.response);
    Router.push("http://localhost:3000/menu");
}

export default function examform() {
    return (
        <ShowExamForm />
    )
}

class ShowExamForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            examName: "",
            accessCode: "",
            questionUI: [],
            questionList: []
        };
    }

    addQuestion = () => {
        //We need to implement correct answers.
        let questions = [...this.state.questionUI]
        questions.push(
            <div key={"Q" + questions.length + 1}>
                <div>
                    <label>Question {questions.length + 1}.</label>
                </div>
                <br />
                <div>
                    <label>Statement:</label>
                    <br />
                    <textarea required onChange={this.handleInputChange} placeholder="statement" type="text" name={questions.length + "S"}></textarea>
                </div>
                <br />
                <div>
                    <label>Answers:</label>
                    <br />
                    <label>A. </label>
                    <input required onChange={this.handleInputChange} placeholder="answer" type="text" name={questions.length + "A"}></input>
                    <br />
                    <label>B. </label>
                    <input required onChange={this.handleInputChange} placeholder="answer" type="text" name={questions.length + "B"}></input>
                    <br />
                    <label>C. </label>
                    <input required onChange={this.handleInputChange} placeholder="answer" type="text" name={questions.length + "C"}></input>
                    <br />
                    <label>D. </label>
                    <input required onChange={this.handleInputChange} placeholder="answer" type="text" name={questions.length + "D"}></input>
                </div>
                <br />
            </div>
        );
        this.setState(state => ({
            questionUI: questions
        }));
    }

    handleInputChange = e => {
        let questions = [...this.state.questionList]
        let newStatement = "";
        let newOptions = [];
        let identifier = e.target.name.split("");
        if (questions[identifier[0]] != null) {
            newStatement = questions[identifier[0]].statement;
            newOptions.push.apply(newOptions, questions[identifier[0]].options);
        }
        switch (identifier[1]) {
            case "S":
                questions[identifier[0]] = { statement: e.target.value, options: newOptions }
                break;
            case "A":
                newOptions[0] = e.target.value;
                questions[identifier[0]] = { statement: newStatement, options: newOptions }
                break;
            case "B":
                newOptions[1] = e.target.value;
                questions[identifier[0]] = { statement: newStatement, options: newOptions }
                break;
            case "C":
                newOptions[2] = e.target.value;
                questions[identifier[0]] = { statement: newStatement, options: newOptions }
                break;
            case "D":
                newOptions[3] = e.target.value;
                questions[identifier[0]] = { statement: newStatement, options: newOptions }
                break;
        }
        this.setState(state => ({
            questionList: questions
        }));
    }

    handleInfoChange = e => {
        switch (e.target.name) {
            case "examName":
                this.state.examName = e.target.value;
                break;
            case "accessCode":
                this.state.accessCode = e.target.value;
                break;
        }
    }

    render() {
        return (
            <form>
                <div>
                    <input onChange={this.handleInfoChange} required placeholder="Exam name" type="text" name="examName"></input>
                </div>
                <br />
                <div>
                    <input onChange={this.handleInfoChange} required placeholder="Access code" type="text" name="accessCode"></input>
                </div>
                <br />
                {this.state.questionUI}
                <button onClick={() => this.addQuestion()}>+Question</button>
                <button type="submit" onSubmit={() => handleSubmit(this.state.examName, this.state.accessCode, this.state.questionList)}>Create Exam</button>
            </form>
        )
    }
}