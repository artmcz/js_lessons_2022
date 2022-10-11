import {useCallback, useMemo, useState, FC} from 'react';
import Board from '../board/board';


type Squares = Square[];

type Square = null | 'X' | 'O';

type HistoryItem = {squares: Squares}
type History = Array<HistoryItem>;

type State = {
	history: History;
	stepNumber: number;
	xIsNext: boolean;
}



const Game:FC = () => {
	const [state, setState] = useState<State>(
		{
			history: [{
				squares: Array(9).fill(null),
			}],
			stepNumber: 0,
			xIsNext: true,
		}
	);

	const handleClick = useCallback((i) => {
			const history = state.history.slice(0, state.stepNumber + 1);
			const current = history[history.length - 1];
			const squares = current.squares.slice();
			if (calculateWinner(squares) || squares[i]) {
				return;
			}
			squares[i] = state.xIsNext ? 'X' : 'O';
			setState({
				history: history.concat([{
					squares: squares,
				}]),
				stepNumber: history.length,
				xIsNext: !state.xIsNext,
			});
		}, [state.history, setState, state.stepNumber, state.xIsNext]
	)

	const jumpTo = useCallback((step) => {
			setState((prevState) => ({
				...prevState,
				stepNumber: step,
				xIsNext: (step % 2) === 0,
			}));
		}, [setState]
	)

	const history = state.history;
	const current = history[state.stepNumber];
	const winner = useMemo(() => {
		return calculateWinner(current.squares);
	}, [current.squares])


	const moves = useMemo(() => {
		return (
			history.map((step, move) => {
				const desc = move ?
					'Go to move #' + move :
					'Restart';
				return (
					<li key={move}>
						<button onClick={() => jumpTo(move)}>{desc}</button>
					</li>
				);
			})
		)
	}, [history, jumpTo])

	const status = useMemo(() => {
		let status;
		if (winner) {
			status = 'Won ' + winner;
		} else {
			status = 'Next on: ' + (state.xIsNext ? 'X' : 'O');
		}
		return status;
	}, [state.xIsNext, winner])

	return (
		<div className="game">
			<div className="game-board">
				<Board
					squares={current.squares}
					onClick={(i) => handleClick(i)}
				/>
			</div>
			<div className="game-info">
				<div>{status} TSX</div>
				<ol>{moves}</ol>
			</div>
		</div>
	);
}

function calculateWinner(squares) {
	const lines = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	];
	for (let i = 0; i < lines.length; i++) {
		const [a, b, c] = lines[i];
		if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
			return squares[a];
		}
	}
	return null;
}

export default Game;