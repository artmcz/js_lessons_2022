import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// const text = 'New text'
// const date = Date();

// const elem = (
//     <div>
//         <h2 className='classfor'>Text: {text} : {2+2} : {date}</h2>
//         <input type="text" />
//         <button>Button</button>
//         <button tabIndex={0} />
//     </div>
// );

// const elem = React.createElement('h2', {className: 'myClass'}, 'My new app');
//
// const element = {
//     type: 'h1',
//     props: {
//         className: 'classTwo',
//         children: 'Text for h1'
//     }
// };

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

