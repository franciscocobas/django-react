import React from 'react';
import { render } from 'react-dom';

function App() {
  return <h1>Testing</h1>;
}

export default App;

const appDiv = document.getElementById('app');
render(<App />, appDiv);
