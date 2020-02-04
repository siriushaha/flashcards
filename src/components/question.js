import React from 'react';

import FlippedCard from './flippedCard';

const Question = ({ question, handleFlip}) => {
    return (
        <FlippedCard
            title='Question'
            description={question}
            button='Answer'
            handleFlipCard={handleFlip}
        />
    );
};

export default Question;