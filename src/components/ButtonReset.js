import React from 'react'

const ButtonReset = ({handleReset,children}) => {
    return (
        <div className='button-container'>
            <button onClick={() => handleReset()}>{children}</button>
        </div>
    )
};


export default ButtonReset;