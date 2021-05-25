import React from 'react'


const Points = ({score}) => {
    return (
        <div className='points-container'> 
        <div className='points'>
            <div className='x-points'>
                {score.X}
            </div>
            <div className='o-points'>
                {score.O}
            </div>
        </div>
        </div>
    )
};

export default Points;