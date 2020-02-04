import React from 'react';

import FlippedCard from './flippedCard';

const Answer = ({ index, answer, handleFlip}) => {
    const title = `Answer #${index}`;
    return (
        <FlippedCard
            title={title}
            description={answer}
            button='Question'
            handleFlipCard={handleFlip}
        />
    );
};

export default Answer;