## Challenge

The program takes a predefined set of questions and answers, shuffles the order, and presents each
question and answer, one at a time in a flashcard format.

● You are free to define the data format for the collection of questions and answers. It could be
hardcoded into the code base, or by other user friendly interfaces.

● The order of the questions and answers should be different if you run through the application
multiple times (unless there is only one question/answer loaded).

● The flashcard application should be able to display an interactive flashcard for each question.

The only required interaction on the flashcard:

○ When displayed a question, you should be able to interact with the card to show the
answer

○ When displayed an answer, you should be able to interact with the card to show the
next question.

○ When you’re at the last answer, you should be able to interact with the application to
run it again.

The application must run on a modern web browser and be written as a front-end javascript
application.

### Guidelines and Hints

#### Install node v8.17.0 or above

### Available Scripts

In the project directory, you can run the following scripts:

#### `npm install` / `yarn`
#### `npm start` / `yarn start`

Runs the app and the local API server in development mode, using the two commands described below.<br>
Open [http://localhost:3000](http://localhost:3000) to load the app in the browser. The server is available on port 4000, e.g. [http://localhost:4000/api/flashcards](http://localhost:4000/api/flashcards).

The page will reload if you make edits to the client.<br>
You will also see any lint errors in the console.<br>
You will need to restart the server manually if you edit the server code.

#### `npm start:dev-build` / `yarn start:dev-build`

Runs the app in development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to load the app in the browser.

The page will reload if you make edits to the client.<br>
You will also see any lint errors in the console.

#### `npm start:server` / `yarn start:server`

Runs the local API server in development mode.<br>
The server is available on port 4000, e.g. [http://localhost:4000/api/flashcards](http://localhost:4000/api/flashcards).

You will need to restart the server manually if you edit the server code.

#### `npm test` / `yarn test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
