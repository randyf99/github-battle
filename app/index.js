// Lesson 2
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// state
// lifecycle event
// UI (only property required)

class App extends React.Component {
  // UI
  render() {
    return (
      <div>
        Hello React Training!
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
