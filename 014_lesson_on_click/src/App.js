import React, { useState, useEffect, useContext, useCallback, useMemo, useRef, Component, FC } from 'react'
// import {Component} from 'react';
import './App.css';


/////////////////// useState useEffect ////////////////

function ExampleUseState() {
	// Объявляем новую переменную состояния "count"
	const [count, setCount] = useState(0);
	const [age, setAge] = useState(42);

	useEffect(() => {
		// Обновляем заголовок документа, используя API браузера
		document.title = `Вы нажали ${count} раз`;
	});


	return (
		<div>
			<h2>useState and useEffect</h2>
			<p>Вы нажали {count} раз</p>
			<button onClick={() => {
				setCount(count + 1); 
				setAge(age + 1);
				}
			}>
				Нажми на меня
			</button>
			<p>Other: {age}</p>
		</div>
	);
}

/////////////////////// useContent /////////////

const themes = {
	light: {
		foreground: "#000000",
		background: "#eeeeee"
	},
	dark: {
		foreground: "#ffffff",
		background: "#222222"
	}
};

const ThemeContext = React.createContext(themes.light);


function Toolbar(props) {
	return (
		<div>
			<ThemedButton />
		</div>
	);
}

function ThemedButton() {
	const theme = useContext(ThemeContext);
	return (
		<>
			<h2>useContext</h2>
			<button style={{ background: theme.background, color: theme.foreground }}>
				Я стилизован темой из контекста!
			</button>
		</>
	);
}

/////////////////////// useCallback /////////////

export function List({ getItems }) {
	const [items, setItems] = useState([])

	useEffect(() => {
		setItems(getItems())
		console.log('Updating items');
	}, [getItems])

	return items.map(item => <div key={item}> {item} </div>)
}

function ExampleUseColback() {
	const [num, setNum] = useState(1);
	const [dark, setDark] = useState(1);

	const getItems = useCallback(() => {
		return [num, num + 1, num + 2]
	}, [num])

	const theme = {
		background: dark ? '#333' : '#ccc',
		color: dark ? '#fff' : '#333',
	}

	return (
		<>
			<h2>useCallback</h2>
		
			<div style={theme}>


				<input 
					type='number'
					value={num} 
					onChange={e => setNum(parseInt(e.target.value))} 
				/>
				<button onClick={() => setDark(prevDark => !prevDark)}>
					Toggle theme
				</button>
				<List getItems={getItems} />

			</div>

		</>
	)
}

/////////////////////// END useCallback /////////////

function getSomeImages() {
	return [
		'url1',
		'url2',
		'url3',
		'url4',
	]
}

console.log(getSomeImages());

/////////////////////// useMemo /////////////

function App() {
	return (
		<div className="App">
			{ ExampleUseState() }

			<ThemeContext.Provider value={themes.dark}>
				<Toolbar />
			</ThemeContext.Provider>

			{ ExampleUseColback() }

			
			
		</div>
	);
}

export default App;
