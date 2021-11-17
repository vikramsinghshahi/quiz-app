import React, { Component } from 'react';
import _ from 'lodash';

class Quiz extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            currentQuestion: 0,
            answers: null,
            correctAnswer: null,
        };
    }

    componentDidMount()
    {
        let arrOfIncorrect = [
            ...this.props.questions[this.state.currentQuestion].incorrect_answers,
        ];

        let correctAns =
            this.props.questions[this.state.currentQuestion].correct_answer;

        let arrOfAllAns = _.uniq(_.concat(arrOfIncorrect, correctAns));

        this.setState({
            answers: arrOfAllAns,
            correctAnswer: correctAns,
        });
    }

    componentDidUpdate(prevProps, prevState)
    {
        if (prevState.currentQuestion !== this.state.currentQuestion)
        {
            let arrOfIncorrect = [
                ...this.props.questions[this.state.currentQuestion].incorrect_answers,
            ];

            let correctAns =
                this.props.questions[this.state.currentQuestion].correct_answer;

            let arrOfAllAns = _.uniq(_.concat(arrOfIncorrect, correctAns));

            this.setState({
                answers: arrOfAllAns,
                correctAnswer: correctAns,
            });
        }
    }

    handleNextQuestion = () =>
    {
        if (!this.props.allAnswers[this.state.currentQuestion])
        {
            alert('You must select answer of current question.');
        } else
        {
            this.setState((prevState) =>
            {
                return {
                    currentQuestion: prevState.currentQuestion + 1,
                };
            });
        }
    };

    render()
    {
        let questionToDisplay = this.props.questions[this.state.currentQuestion];
        console.log(questionToDisplay);
        return (
            <div className="quiz">
                <h2>
                    Question No. -{' '}
                    <span className="text-pink-900">
                        {this.state.currentQuestion + 1}
                    </span>
                </h2>
                <h2>
                    <span className="px-4 py-2 rounded-full text-2xl font-medium bg-indigo-300">
                        Difficulty Level : {questionToDisplay.difficulty}
                    </span>
                </h2>
                <h3>
                    Question:- <span>{questionToDisplay.question}</span>
                </h3>

                {this.state.answers ? (
                    <>
                        <ul>
                            {this.state.answers.map((answer, i) =>
                            {
                                return (
                                    <li
                                        onClick={(event) =>
                                        {
                                            this.props.handleAnswerSelect(
                                                answer,
                                                this.state.currentQuestion
                                            );
                                        }}
                                        key={i}
                                        className={
                                            this.props.allAnswers[this.state.currentQuestion] ===
                                                answer
                                                ? 'option_active'
                                                : 'option'
                                        }
                                    >
                                        {i + 1} :- {'   ' + answer}
                                    </li>
                                );
                            })}
                        </ul>
                    </>
                ) : (
                    ''
                )}

                {this.state.currentQuestion > 8 ? (
                    <div className="btn_wrapper">
                        <button
                            className="btn_submit"
                            onClick={(event) =>
                            {
                                this.props.handleSubmit(
                                    this.props.questions,
                                    this.props.allAnswers
                                );
                            }}
                        >
                            Submit
                        </button>
                    </div>
                ) : (
                    <div className="btn_wrapper">
                        <button
                            className="btn_next"
                            onClick={(event) =>
                            {
                                this.handleNextQuestion();
                            }}
                        >
                            Next
                        </button>
                    </div>
                )}
            </div>
        );
    }
}

export default Quiz;