import React from 'react';

import FlippedCard from './flippedCard';

const Answer = ({ answer, handleFlip}) => {
    return (
        <FlippedCard
            title='Answer'
            description={answer}
            button='Question'
            handleFlipCard={handleFlip}
        />
    );
};

export default Answer;