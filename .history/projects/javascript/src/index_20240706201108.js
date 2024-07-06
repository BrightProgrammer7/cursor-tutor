///////////////////////
// Welcome to Cursor //
///////////////////////

/*
Step 1: Try generating a react component that lets you play tictactoe with Cmd+K or Ctrl+K on a new line.
  - Then integrate it into the code below and run with npm start

Step 2: Try highlighting all the code with your mouse, then hit Cmd+k or Ctrl+K. 
  - Instruct it to change the game in some way (e.g. add inline styles, add a start screen, make it 4x4 instead of 3x3)

Step 3: Hit Cmd+L or Ctrl+L and ask the chat what the code does

Step 4: To try out cursor on your own projects, go to the file menu (top left) and open a folder.
*/


import React from 'react';
import ReactDOM from 'react-dom/client';
import TicTacToe from './TicTacToe'; // Import the TicTacToe component
import TodoApp from './T'; // Import the TodoApp component

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Hello World
        <button onClick={() => alert('Hello World')}>Click me</button>
        <TicTacToe /> {/* Add the TicTacToe component */}
        <TodoApp /> {/* Add the TodoApp component */}
      </header>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);