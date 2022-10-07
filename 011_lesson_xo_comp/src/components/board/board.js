function Square(props) {
  return (
    <button className='square' onClick={props.onClick}>
      {props.value}
    </button>
  );
}





function Setka(props) {
  
  const div = '<h1> sdgfdsgf</h1>';

  for (let i = 0; i <= props.num; i++) {
    
  }

  return (
    <h1>{div}</h1>
  );


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
      {renderSetka(8)}
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
    </div>
  );
}

   
export default Board;