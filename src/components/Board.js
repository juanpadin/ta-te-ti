import React from 'react'


const Board = ({squares,onItem}) => {

    
    const renderSquares = squares.map((square,index) => {
        return <div onClick={() => onItem(index)} className='item'>{square}</div>
    })

    return (
        <div className='board-container'>
            <div className='board'>
                {renderSquares}
            </div>
        </div>
    )
}

export default Board;