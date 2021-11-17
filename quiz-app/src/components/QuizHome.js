import React, { Component } from 'react';
import Quiz from './Quiz';
import _ from 'lodash';
import Result from './Result';

class QuizHome extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            questions: null,
            answers: [],
            isSubmitted: false,
        };
    }

    componentDidMount()
    {
        let category = this.props.location.state.category;
        let level = this.props.location.state.level;
        console.log(category, level);
        fetch(
            `https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${level}`
        )
            .then((res) => res.json())
            .then((questions) =>
            {
                this.setState({ questions: questions.results });
            });
    }

    handleAnswerSelect = (ans, currentQuestion) =>
    {
        // console.log(ans);
        if (!this.state.answers[currentQuestion])
        {
            this.setState((prevState) =>
            {
                let updatedAns = _.concat(prevState.answers, ans);
                return {
                    answers: updatedAns,
                };
            });
        } else
        {
            this.setState((prevState) =>
            {
                prevState.answers[currentQuestion] = ans;
                return {
                    answers: prevState.answers,
                };
            });
        }
    };

    handleSubmit = () =>
    {
        if (!this.state.answers[9])
        {
            alert('You must select answer of current question.');
        } else
        {
            this.setState((prevState) =>
            {
                return {
                    isSubmitted: !prevState.isSubmitted,
                };
            });
        }
    };

    render()
    {
        return (
            <section className="wrapper">
                {this.state.questions && !this.state.isSubmitted ? (
                    <Quiz
                        questions={this.state.questions}
                        allAnswers={this.state.answers}
                        isSubmitted={this.state.isSubmitted}
                        handleAnswerSelect={this.handleAnswerSelect}
                        handleSubmit={this.handleSubmit}
                    />
                ) : (
                    ''
                )}

                {this.state.isSubmitted ? (
                    <Result
                        questions={this.state.questions}
                        allAnswers={this.state.answers}
                    />
                ) : (
                    ''
                )}
            </section>
        );
    }
}

export default QuizHome;