import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ReactCardFlip from 'react-card-flip';

import { flipFlashcard } from '../store/actions';
import Question from './question';
import Answer from './answer';

const Flashcard = ({ flashcard, index }) => {
    const isFlipped = useSelector(state => state.isFlipped);
    const dispatch = useDispatch();

    const handleFlip = useCallback((e) => {
        e.preventDefault();
        dispatch(flipFlashcard());
    }, [dispatch]);

    return (
        <ReactCardFlip
            isFlipped={isFlipped}
            flipDirection="horizontal"
        >
         <Question index={index} question={flashcard.question} handleFlip={handleFlip} />
         <Answer index={index} answer={flashcard.answer} handleFlip={handleFlip} />
        </ReactCardFlip>
    );
};

export default Flashcard;
