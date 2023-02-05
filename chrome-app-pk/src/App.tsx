import React, {Component} from 'react';
function App() {
  function btnClick(): void{
    window.open('https://philakit.surge.sh');
  }
  return (
    <div>
      <header>
       <h4> Welcome to philakit </h4>
       <div>
            <button onClick={btnClick}>Go to philakit</button>
        </div>
      </header>
    </div>
  );
}

export default App;
