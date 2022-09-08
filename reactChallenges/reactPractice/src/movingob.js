import React, { useState } from 'react';
// import ScotchInfoBar from './ScotchInfoBar';

function Movin() {
  const [offsetTop, setOffsetTop] = useState(300);

  function moveBoxUp() {
    setOffsetTop(offsetTop - 100);
  }

  return (
    <div className="App">
      <h1>Move the Box!</h1>

      {/* handle the click event on this button */}
      <button onClick={moveBoxUp}>👆 Move Up 👆</button>

      <div className="box" style={{
          transform: `translateY(${offsetTop}px)`
        }}/>      
    </div> 
      

    
    
  );
}
export default Movin

