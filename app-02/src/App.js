import React from 'react';
//import ReactDOM from 'react-dom';
function App({ items }) {
    return (
      <ul>
        {items.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    );
}
export default App;