import React from 'react'
import axios from 'axios';
import '../styles/styles.css'
import { useState } from 'react'
import Turns from './Turns';
const Board = () => {
    const [count, setCount] = useState(0)
    const [position, setPosition] = useState(null)
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
      if(count >= 4){
        axios.post('http://localhost:3000/check',{
          board:newBoard,
          position:position,
          count:count
        })
        .then(function(response){
          console.log(response)
        })
        .catch(function(error){
          console.log(error)
        });
      }
      console.log(newBoard)
    }

  return (
    <div>
      <div className='border'>
    
      {arr.map((num)=>(
        <div key ={num} onClick={() => {clickTheBox(num)}} className="square">
            <p>{board[num] ? board[num]:null},</p>
        </div>
      )
    )};
      </div>
      <Turns currentPlayer={currentPlayer}/>
    </div>
  )

}

export default Board
