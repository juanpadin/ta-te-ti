import React from 'react'

const Button = ({handleNewGame,children}) => {
    return (
        <div className='button-container'>
            <button onClick={() => handleNewGame()}>{children}</button>
        </div>
    )
};


export default Button;