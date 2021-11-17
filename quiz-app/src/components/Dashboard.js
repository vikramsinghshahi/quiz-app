import React, { Component } from 'react';
import Category from './Category';
import Levels from './Levels';
class Dashboard extends Component
{
    constructor(props)
    {
        super(props);
        this.state = { category: null, level: null };
    }

    handleAddCategory = (event, category) =>
    {
        console.log('clicked');
        this.setState({ category: category });
    };

    handleDifficulty = (event, level) =>
    {
        this.setState({ level: level });
    };
    render()
    {
        return (
            <>
                <div className="container">
                    <Category
                        category={this.state.category}
                        handleAddCategory={this.handleAddCategory}
                    />
                    <Levels
                        level={this.state.level}
                        category={this.state.category}
                        handleDifficulty={this.handleDifficulty}
                    />
                </div>
            </>
        );
    }
}

export default Dashboard;