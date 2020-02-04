import * as _ from "lodash";

export const SHUFFLE_FLASHCARDS = 'SHUFFLE_FLASHCARDS';
export const INITIALIZE_FLASHCARDS = 'INITIALIZE_FLASHCARDS';
export const NEXT_FLASHCARD = 'NEXT_FLASHCARD';
export const FLIP_FLASHCARD = 'FLIP_FLASHCARD';

export const initializeFlashcards = (flashcards) => {
    return {
        type: INITIALIZE_FLASHCARDS,
        payload: flashcards
    };
};

export const shuffleFlashcards = (flashcards) => {
    const newFlashcards = _.shuffle(Array.from(flashcards.keys()));
    return {
        type: SHUFFLE_FLASHCARDS,
        payload: newFlashcards
    };
};

export const nextFlashcard = () => {
    return {
        type: NEXT_FLASHCARD,
    };
};

export const flipFlashcard = () => {
    return {
        type: FLIP_FLASHCARD,
    };
};