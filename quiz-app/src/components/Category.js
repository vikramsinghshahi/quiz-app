import React, { Component } from 'react';

class Category extends Component
{
    constructor(props)
    {
        super(props);
        this.state = { categories: [] };
    }
    componentDidMount()
    {
        fetch('https://opentdb.com/api_category.php')
            .then((res) => res.json())
            .then((categories) =>
            {
                console.log(categories.trivia_categories);
                this.setState({ categories: categories.trivia_categories });
            });
    }
    render()
    {
        return (
            <section className="category">
                <h2 className="category_header">Select Category</h2>
                <div className="category_buttons">
                    {this.state.categories.map((category) =>
                    {
                        return (
                            <button
                                onClick={(event) =>
                                {
                                    this.props.handleAddCategory(event, category);
                                }}
                                className={
                                    this.props.category === category
                                        ? 'primary_btn_active'
                                        : 'primary_btn'
                                }
                                key={category.id}
                            >
                                {category.name}
                            </button>
                        );
                    })}
                </div>
            </section>
        );
    }
}

export default Category;