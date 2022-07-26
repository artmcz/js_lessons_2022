import {Component, StrictMode} from 'react';
import logo from './logo.svg';
import './App.css';

const Header = () => {
    return <h2>Lessons</h2>
}

const Logo = () => {
    const styleLogo = {
        width: '50px'
    }
    const logoAlt = 'React logo'
    return <img src={logo} style={styleLogo} alt={logoAlt} />
}

// const Field = () => {
//     const holder = 'Enter text here'
//     const styleField = {
//         width: '300px'
//     };npx create-react-app
//     const fieldTypeText = 'text'
//     return <input
//             placeholder={holder}
//             type={fieldTypeText}
//             style={styleField} />
// }

function Btn() {
    const text = 'Log in';
    const logged = false;
    return <button>{logged ? 'Enter' : text}</button>
}

class Field extends Component {
    render() {
        const holder = 'Enter text here'
        const styleField = {
            width: '300px'
        };
        const fieldTypeText = 'text'
        return <input
                placeholder={holder}
                type={fieldTypeText}
                style={styleField} />
    }
}

function App() {
    return (
        <div className="App">
            <Logo />
            <StrictMode>
                <Header />
            </StrictMode>
            <Field />
            <Btn />
        </div>
    );
}

export {Header};
export default App;
