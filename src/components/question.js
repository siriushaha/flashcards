import React from 'react';

import FlippedCard from './flippedCard';

const Question = ({ index, question, handleFlip}) => {
    const title = `Question #${index}`;
    return (
        <FlippedCard
            title={title}
            description={question}
            button='Answer'
            handleFlipCard={handleFlip}
        />
    );
};

export default Question;