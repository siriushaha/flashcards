import { INITIALIZE_FLASHCARDS, SHUFFLE_FLASHCARDS, NEXT_FLASHCARD, PREV_FLASHCARD, FLIP_FLASHCARD } from './actions';

const INITIAL_STATE = {
    flashcards: null,
    total: 0,
    shuffledFlashcards: [],
    curFlashcard: null,
    curIndex: 0,
    isFlipped: false,
};

const reducer = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case INITIALIZE_FLASHCARDS:
            return {
                ...state,
                flashcards: action.payload,
                total: action.payload.size
            };

        case SHUFFLE_FLASHCARDS:
            return {
                ...state,
                shuffledFlashcards: action.payload,
                curIndex: 0,
                curFlashcard: state.flashcards.get(action.payload[0])
            };

        case PREV_FLASHCARD:
            const prevIndex = state.curIndex - 1;
            const prevCard = state.flashcards.get(state.shuffledFlashcards[prevIndex]);
            return {
                ...state,
                curIndex: prevIndex,
                curFlashcard: prevCard,
                isFlipped: false,
            };

        case NEXT_FLASHCARD:
            const nextIndex = state.curIndex + 1;
            const nextCard = state.flashcards.get(state.shuffledFlashcards[nextIndex]);
            return {
                ...state,
                curIndex: nextIndex,
                curFlashcard: nextCard,
                isFlipped: false,
            };

        case FLIP_FLASHCARD:
            return {
                ...state,
                isFlipped: !state.isFlipped,
            };

        default:
            return state;
    }
};

export default reducer;
