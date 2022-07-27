import {Component} from "react";
import './App.css';

// Components state

class WhoAmI extends Component {

    constructor(props) {
        super(props);
        this.state = {
            years: 31,
            text: '+++',
            position: ''
        }
    }

    nextYear = () => {
        this.setState(state => ({
            years: state.years + 1
        }))
    }

    commitInputChanges = (e) => {
        this.setState({
            position: e.target.value
        })
    }

    render() {
        const {name, surname, link} = this.props;
        const {position, years} = this.state;
        return (
            <div>
                <button onClick={this.nextYear}>{this.state.text}</button>
                <h1>My name is {name},
                    surname - {surname},
                    age {years},
                    position = {position}</h1>
                <a href={link}>My profile</a>
                <form action="">
                    <span>Dolznost</span>
                    <input type="text" onChange={this.commitInputChanges}/>
                </form>
            </div>
        )
    }
}

function App() {
    return (
        <div className="App">
            <WhoAmI name='Jone' surname='Smith' link='fb.com'/>
            <WhoAmI name='Alex' surname='Href' link='vk.com'/>
        </div>
    );
}


// Properties components



// function WhoAmI({name, surname, link}) {
//     return (
//         <div>
//             <h1>My name is {name()}, surname - {surname}</h1>
//             <a href={link}>My profile</a>
//         </div>
//     )
//
// }
//
// function App() {
//     return (
//         <div className="App">
//             <WhoAmI name={() => {return 'John'}} surname='Smith' link='fb.com'/>
//
//             {/*<WhoAmI name={{firstName: 'Jone'}} surname='Smith' link='fb.com'/>*/}
//             {/*<WhoAmI name={{firstName: 'Alex'}} surname='Href' link='vk.com'/>*/}
//         </div>
//     );
// }

export default App;
