import React from 'react'

const Turns = ({currentPlayer}) => {
  return (
    <div>
      <p>{currentPlayer == 'X' ? 'this is X turn' : 'this is O turn'}</p>
    </div>
  )
}

export default Turns
