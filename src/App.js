import react, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [numbers, setNumbers] = useState([]);

  const planets = ['sun', 'moon', 'mercury', 'venus', 'mars', 'jupiter', 'saturn', 'uranus', 'neptune', 'pluto', 'north node', 'south node'];
  const zodiac = ['aries', 'taurus', 'gemini', 'cancer', 'leo', 'virgo', 'libra', 'scorpio', 'sagittarius', 'capricorn', 'aquarius', 'pisces'];
  const houses = ['first', 'second', 'third', 'fourth', 'fifth', 'sixth', 'seventh', 'eighth', 'ninth', 'tenth', 'eleventh', 'twelfth'];

  useEffect(() => {
    fetch('https://qrng.anu.edu.au/API/jsonI.php?length=3&type=uint8')
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setNumbers(result.data.map(n => Math.floor(n / 255 * 12)));
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  function pickOneFromTwelve(group, number) {
    return group[number];
  }

  if (error) {
    return <div>Error: {error.message}</div>
  } else if (!isLoaded) {
    return <div>Loading...</div>
  } else {
    return (
      <div className="App">
        <header className="App-header">
          <h2>astrodice</h2>
          <div className="dieValue">
            {planets[numbers[0]]}
          </div>
          <div className="dieValue">
            {zodiac[numbers[1]]}
          </div>
          <div className="dieValue">
            {houses[numbers[2]]} house
          </div>
        </header>


      </div>
    );
  }

}

export default App;
