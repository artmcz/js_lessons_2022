function Square(props) {
	return (
	  <button className='square' onClick={props.onClick}>
		{props.value}
	  </button>
	);
}

function Setka(props) {
	
	let div = '';
  
	for (let i = 0; i <= props.num; i++) {
		if (i === 0 || i === 3 || i === 6) {
			div = div + '<div class=\'board\'>';
		}
		div = div + '<div>' + i + '</div>';
		if (i === 2 || i === 5 || i === 8) {
			div = div + '</div>';
		}
	}
  
	return div;
}
  
function Board(props) {
	const renderSquare = (i) => {
		return (
			<Square 
				value = {props.squares[i]}
				onClick = {() => props.onClick(i)}
			/>
		);
	}
  
	const renderSetka = (a) => {
		return (
			<Setka 
				num = {a}
			/>
		);
	}
  
	return (
		<div>
			<div className="board-row">
				{renderSquare(0)}
				{renderSquare(1)}
				{renderSquare(2)}
			</div>
			<div className="board-row">
				{renderSquare(3)}
				{renderSquare(4)}
				{renderSquare(5)}
			</div>
			<div className="board-row">
				{renderSquare(6)}
				{renderSquare(7)}
				{renderSquare(8)}
			</div>
			renderSetka(8)
		</div>
	);
}
  
	 
export default Board;