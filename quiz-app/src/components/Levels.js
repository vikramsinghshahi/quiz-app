import { NavLink } from 'react-router-dom';

function Levels(props)
{
    return (
        <>
            <section className="level">
                <h2 className="level_header">Select Difficulty Level</h2>
                <div className="level_buttons">
                    {['easy', 'medium', 'hard'].map((level) =>
                    {
                        console.log(props.level, level);
                        return (
                            <button
                                onClick={(event) =>
                                {
                                    props.handleDifficulty(event, level);
                                }}
                                className={
                                    props.level === level ? 'primary_btn_active' : 'primary_btn'
                                }
                            >
                                {level}
                            </button>
                        );
                    })}
                </div>

                {props.category && props.level ? (
                    <div className="center">
                        <NavLink
                            to={`/quiz/${props.category.id}/${props.level}`}
                            className="secondary_btn"
                            state={{ category: props.category.id, level: props.level }}
                        >
                            {' '}
                            Start Quiz
                        </NavLink>
                    </div>
                ) : (
                    ''
                )}
            </section>
        </>
    );
}

export default Levels;