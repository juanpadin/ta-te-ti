import React,{useState} from 'react'
import Board from './Board';
import Points from './Points';
import './App.css'
import Button from './Button';

const winningPoints = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [6,4,2]
]


const App = () =>{
    const [turn, setTurn] = useState('X')
    const [squares, setSquares] = useState(Array(9).fill(null))
    const [score, setScore] = useState({
        X: 0,
        O:0
    });

    const checkWinner = (newSquares) => {
        for(let i=0;i < winningPoints.length; i++){
            const [a,b,c] = winningPoints[i];
            if(newSquares[a] && newSquares[a] === newSquares[b] && newSquares[a]===newSquares[c]){
                //hay un ganador
                setTurn(null);
                return setScore({
                    ...score,
                    [newSquares[a]]: score[newSquares[a]] + 1 
                })
            }
        }
        if(!newSquares.includes(null)){
            //empate
            setTurn(null);
            return setScore({
                ...score
            })
        }
    }

    
    const onItem = (index) =>{
        const newSquares = squares.map((square,i) => index === i ? turn : square);
        setSquares(newSquares);
        if(turn !== null){
            setTurn(turn === 'X' ? 'O' : 'X')
            checkWinner(newSquares)
        }
        
        
    }
    
    const handleNewGame = () =>{
        setTurn('X')
        setSquares(Array(9).fill(null));
    }

    return(
        <div className='container'>
            <Board squares={squares} onItem={onItem} turn={turn}/>
            <Button handleNewGame={handleNewGame}/>
            <Points score={score}/>
            
        </div>
    );
};

export default App;