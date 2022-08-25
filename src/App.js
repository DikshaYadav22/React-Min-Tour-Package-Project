import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import Tours from './components/Tours';
import data from './components/Data';

const App = () => {
  const [toursData, setTours] = useState(data);

  const deleteTour =(id) => 
  {
    const deletedData = toursData.filter((tour)=> {
      return tour.id != id;
      
    });

    setTours(deletedData);
  }

  return (
    <div className="App">
        <Tours tourData = {toursData} deleteData={deleteTour} />
    </div>
  );
}

export default App;
