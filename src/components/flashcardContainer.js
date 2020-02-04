import React from 'react';
import { useDispatch} from 'react-redux';

import useFetch from "../hooks/useFetch";
import { initializeFlashcards,  shuffleFlashcards } from '../store/actions';

const FlashcardContainer = ({ children}) => {
    const [flashcards, loading] = useFetch('/api/flashcards');
    const dispatch = useDispatch();

    if (loading) return <div>Loading</div>;

    dispatch(initializeFlashcards(flashcards));
    dispatch(shuffleFlashcards(flashcards));
    return (children);
};

export default FlashcardContainer;