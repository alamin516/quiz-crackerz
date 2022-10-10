import React from 'react';

const QuestionOptions = ({option}) => {
    return (
        <div>
            <input type="radio"/> <p>{option}</p>
        </div>
    );
};

export default QuestionOptions;