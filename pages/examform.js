import React from 'react'
import Router from 'next/router'

let handleSubmit = async (examName, questionList, examDescription) => {
    event.preventDefault();
    let state = {
        examName: examName,
        examDescription: examDescription,
        questions: questionList,
    }
    let config = {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(state)
    }
    //console.log(state);
    let exam = await fetch("/api/createexam", config);
    //const resultExam = await exam.json();
    //console.log(resultExam.response);
    //Router.push("http://localhost:3000/menu");
}

export default function examform() {
    return (
        <ShowExamForm />
    )
}

/*examform.getInitialProps = async () => {
  let examsData = await fetch("http://localhost:3000/api/ExamsDatabase");
  const examsInfo = await examsData.json();
  //console.log(numExams);
  return { numExam: examsInfo.response.length }
}*/

class ShowExamForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            examName: "",
            questionUI: [],
            questionList: [],
            answerList: []
        };
    }

    addQuestion = () => {
        //We need to implement correct answers. IMPORTANT: Correct answers go inside the questions array.
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
                    <br />
                    <br />
                    <label>Correct answer </label>
                    <br />
                    <input required onChange={this.handleInputChange} placeholder="write a number (1-4)" type="text" name={questions.length + "R"}></input>
                </div>
                <br />
            </div>
        );
        this.setState(state => ({
            questionUI: questions
        }));
    }

    handleInputChange = e => {
        let questions = [...this.state.questionList];
        let answers = [...this.state.answerList];
        let newStatement = "";
        let newOptions = [];
        let correctAnswer = "";
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
            case "R":
              newOptions[4] = e.target.value;
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
            case "examDescription":
                this.state.examDescription = e.target.value;
                break;
        }
    }

    goBack = async e => {
        Router.push("http://localhost:3000/menu");
    }

    render() {
        return (
            <form onSubmit={() => handleSubmit(this.state.examName, this.state.questionList, this.state.examDescription)}>
                <div>
                    <input onChange={this.handleInfoChange} required placeholder="Exam name" type="text" name="examName"></input>
                </div>
                <br />
                <div>
                    <input onChange={this.handleInfoChange} required placeholder="Exam description" type="text" name="examDescription"></input>
                </div>
                <br />
                {this.state.questionUI}
                <button onClick={() => this.addQuestion()}>+Question</button>
                <button type="submit">Create Exam</button>
                <button onClick={() => this.goBack()}>Go back</button>
            </form>
        )
    }
}