import React from 'react'

const Button = ({handleNewGame}) => {
    return (
        <div>
            <button onClick={() => handleNewGame()}>New Game!</button>
        </div>
    )
};


export default Button;