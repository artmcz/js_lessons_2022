import {useCallback, FC} from 'react';

type SquareProps = {
    onClick: (squareIndex: number) => void;
    value: Square;
    squareIndex: number;
}

type Square = null | 'X' | 'O';

const Square:FC<SquareProps> = (props) =>  {
    const handleClick = useCallback(
        () => {
            return props.onClick(props.squareIndex)
        }, [props]
    );

    return (
        <button className="square" onClick={handleClick}>
            {props.value}
        </button>
    );
}