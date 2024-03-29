import React, { useState } from 'react';
import data from './data';
import Tours from './Components/Tours';


function App() {

  const [tours, setTours] = useState(data);

  // yeh not intresed waale button click ko handle krega, jisme ki tours htt jaenge
  function removeTour(id) {
    const newTours = tours.filter(tour => tour.id !== id);
    setTours(newTours);
  }

  if(tours.length === 0){
    return (
      <div className='refresh'>
        <h2>No Tours Left</h2>
        <button className='btn-white' onClick={() => setTours(data)}>
          Refresh
        </button>
      </div>
    );
  }

  return (
    <div className='App'>
      <Tours tours={tours} removeTour={removeTour}></Tours>
    </div>
  );
}

export default App;
