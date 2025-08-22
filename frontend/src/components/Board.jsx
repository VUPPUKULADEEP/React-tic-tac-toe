import React from 'react'
import axios from 'axios';
import '../styles/styles.css'
import { useState } from 'react'
import Turns from './Turns';
import Winner from './Winner';

const Board = () => {
  const [winner,setWinner] = useState(null)
    const [count, setCount] = useState(0)
    const [position, setPosition] = useState(0)
    const arr = [0,1,2,3,4,5,6,7,8]
    const [currentPlayer,setCurrentPlayer] = useState('X')
    const  [board,setBoard] =  useState(Array(9).fill(''))
    const clickTheBox = (num) => {
      const newBoard = [...board]
      if(newBoard[num] != ''){
        return
      }
      if(newBoard[num] == ''){
        newBoard[num] = currentPlayer
      }
      setBoard(newBoard)
      setPosition(num)
      setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
      setCount(count+1)
      if(count+1 > 3){
        console.log('api is called')
        axios.post('http://localhost:3000/check',{
          board:newBoard,
          position:num,
          count:count
        })
        .then(function(response){
          console.log(response)
          setWinner(response.data.message)
        })
        .catch(function(error){
          console.log(error)
        });
      }
      console.log(newBoard)
    }

  return (
    <>
    <div className='wrapper'>
      <div className='border'>
    
      {arr.map((num)=>(
        <div key ={num} onClick={() => {clickTheBox(num)}} className="square">
            <p>{board[num] ? board[num]:null}</p>
        </div>
      )
    )}
      </div>
      </div>
      {winner ? <Winner winner={winner}/> :<Turns currentPlayer={currentPlayer}/> }
    </>
  )

}

export default Board
