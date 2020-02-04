import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';

import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';

import store from './store';

import Layout from './components/layout'
import FlashcardPage from './components/flashcardPage';
import theme from './components/theme';
import FlashcardContainer from './components/flashcardContainer';

const App = () => {
    return (
        <Provider store={store} >
            <ThemeProvider theme={theme}>
              <CssBaseline />
              <FlashcardContainer>
                <Layout >
                    <FlashcardPage />
                </Layout>
              </FlashcardContainer>
            </ThemeProvider>
        </Provider>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
