import React, {Component} from 'react';
// import phila from './phila.jpg'
function App() {
  function btnClick(): void{
    window.open('https://philakit.surge.sh');
  }
  return (
    <div>
      <header>
       <h1 align-items="center" background-color="black"> Welcome to philakit </h1>
       {/* <img src={phila} alt="logo"/> */}
      </header>
      <div className='esg'>
        <h1 font-size="100px">84%</h1>
      </div>
      <div>
        <h4>learn more</h4>
      </div>
      <div>
        <button onClick={btnClick}>Search orgs</button>
      </div>
    </div>
  );
}

export default App;
