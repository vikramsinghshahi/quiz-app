import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Result extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            result: null,
            score: null,
        };
    }

    componentDidMount()
    {
        let questions = this.props.questions;
        let allAnswers = this.props.allAnswers;
        let score = 0;

        let result = questions.map((question, i) =>
        {
            if (question.correct_answer === allAnswers[i])
            {
                score = score + 1;
            }
            let obj = {
                question: question.question,
                correct_answer: question.correct_answer,
                yourAns: allAnswers[i],
            };
            return obj;
        });
        this.setState({ result: result, score: score });
    }
    render()
    {
        return (
            <section className="result">
                <h2 className="result_score">
                    Your Score is :{' '}
                    <span className="text-green-900 font-bold text-2xl">
                        {this.state.score}
                    </span>
                </h2>
                {this.state.result ? (
                    <table className="border-2 border-gray-500 mt-10 mb-10 w-9/12 mx-auto">
                        <thead>
                            <tr className="table">
                                <th>Is Correct</th>
                                <th>No.</th>
                                <th>Question</th>
                                <th>Correct Answer</th>
                                <th>Your Answer</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.result.map((ele, i) =>
                            {
                                return (
                                    <tr key={i}>
                                        <td className="icon">
                                            {ele.correct_answer === ele.yourAns ? (
                                                <img alt="" src="/images/checked.png" />
                                            ) : (
                                                <img alt="" src="/images/multiply.png" />
                                            )}
                                        </td>
                                        <td className="table_data">{i + 1}</td>
                                        <td>{ele.question}</td>
                                        <td className="table_data">{ele.correct_answer}</td>
                                        <td className="table_data">{ele.yourAns}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                ) : (
                    ''
                )}
            </section>
        );
    }
}

export default Result;