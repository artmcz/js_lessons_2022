import React from 'react';
import ReactDOM from 'react-dom/client';

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Марья',
  lastName: 'Моревна'
};

const elementReact = React.createElement(
  'h3',
  {className: '0'},
  'Привет, мир!'
);

const element = (
  <h1 className="greeting">
    Привет, мир!
  </h1>
);

function tick() {
  const elementTick = new Date().toLocaleTimeString();
  return elementTick;
}

console.log( tick() );

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <h2>It is {tick()}.</h2>
        {elementReact}
        {element}
        <h1>Hello, world! {formatName(user)}</h1>
      </div>
    );
  }
}

const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(<Game />);