import logo from './logo.svg';

function App() {
  return (
    <div className="App">
      <div className='title'>Game Time</div>
      <div className='Board'>
    
        <div className='game--container'>
         <div data-cell-index="0" class='cell'></div>
         <div data-cell-index="1" class='cell'></div>
         <div data-cell-index="2" class='cell'></div>
         <div data-cell-index="3" class='cell'></div>
         <div data-cell-index="4" class='cell'></div>
         <div data-cell-index="5" class='cell'></div>
         <div data-cell-index="6" class='cell'></div>
         <div data-cell-index="7" class='cell'></div>
         <div data-cell-index="8" class='cell'></div>
        </div>
      </div>
    </div>
  );
}

export default App;
