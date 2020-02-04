import { createStore } from 'redux';
import flashcardReducer from './reducer';

const store = createStore(flashcardReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;