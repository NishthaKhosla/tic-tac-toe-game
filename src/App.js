import React from'react';
import './App.css';
import Board from'./Components/board';
const App = () => {
return(
  <>
  <div>
    <h1 className='turn-message'>Tic-Tac-Toe Game</h1>
    <div className='App'>
      <Board/>
    </div>
  </div>
  </>
)

}



export default App;
