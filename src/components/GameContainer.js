import React from 'react';

const GameContainer = () => {
  const onMouseEnterHandler = event => {
    console.log(event.target.innerHTML)
    if(event.target.innerText === ""){
      event.target.className = "cell mouse-over-empty"
    }
    if (event.target.innerText === "X"){
      event.target.className = "cell mouse-over-filled-x"
    }
    if (event.target.innerText === "O"){
      event.target.className = "cell mouse-over-filled-o"
    }
  }
  const onMouseLeaveHandler = event => {
    if(event.target.innerText === ""){
      event.target.className = "cell"
    }
    if(event.target.innerText === "X"){
      event.target.className = "cell x-filled"
    }
    if(event.target.innerText === "O"){
      event.target.className = "cell o-filled"
    }
  }
  const clickHandler = event => {
    if(event.target.innerText === ""){
      event.target.innerText = "X"
      event.target.className = "cell mouse-over-filled-x"
    } 
    else if(event.target.innerText === "X"){
      event.target.innerText = "O"
      event.target.className = "cell mouse-over-filled-o"
    }
    else{
      event.target.innerText = ""
      event.target.className = "cell mouse-over-empty"
    }     
  }
  return (
    <div className='game--container'>
       <div 
        data-cell-index="0" 
        className="cell" 
        onClick={clickHandler} 
        onMouseEnter={onMouseEnterHandler}
        onMouseLeave={onMouseLeaveHandler}>
        </div>
        <div 
        data-cell-index="1" 
        className="cell" 
        onClick={clickHandler} 
        onMouseEnter={onMouseEnterHandler} 
        onMouseLeave={onMouseLeaveHandler}>
        </div>
        <div 
        data-cell-index="2" 
        className="cell" 
        onClick={clickHandler} 
        onMouseEnter={onMouseEnterHandler} 
        onMouseLeave={onMouseLeaveHandler}>
        </div>
        <div 
        data-cell-index="3" 
        className="cell" 
        onClick={clickHandler} 
        onMouseEnter={onMouseEnterHandler} 
        onMouseLeave={onMouseLeaveHandler}>
        </div>
        <div 
        data-cell-index="4" 
        className="cell" 
        onClick={clickHandler} 
        onMouseEnter={onMouseEnterHandler} 
        onMouseLeave={onMouseLeaveHandler}>
        </div>
        <div 
        data-cell-index="5" 
        className="cell" 
        onClick={clickHandler} 
        onMouseEnter={onMouseEnterHandler} 
        onMouseLeave={onMouseLeaveHandler}>
        </div>
        <div 
        data-cell-index="6" 
        className="cell" 
        onClick={clickHandler} 
        onMouseEnter={onMouseEnterHandler} 
        onMouseLeave={onMouseLeaveHandler}>
        </div>
        <div 
        data-cell-index="7" 
        className="cell" 
        onClick={clickHandler} 
        onMouseEnter={onMouseEnterHandler} 
        onMouseLeave={onMouseLeaveHandler}>
        </div>
        <div 
        data-cell-index="8" 
        className="cell" 
        onClick={clickHandler} 
        onMouseEnter={onMouseEnterHandler} 
        onMouseLeave={onMouseLeaveHandler}>
        </div>
      </div>
  );
};

export default GameContainer;