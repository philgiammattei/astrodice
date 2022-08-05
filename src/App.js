import './App.css';

function App() {
  const planets = ['sun', 'moon', 'mercury', 'venus', 'mars', 'jupiter', 'saturn', 'uranus', 'neptune', 'pluto', 'north node', 'south node'];
  const zodiac = ['aries', 'taurus', 'gemini', 'cancer', 'leo', 'virgo', 'libra', 'scorpio', 'sagittarius', 'capricorn', 'aquarius', 'pisces'];
  const houses = ['first', 'second', 'third', 'fourth', 'fifth', 'sixth', 'seventh', 'eighths', 'ninth', 'tenth', 'eleventh', 'twelfth'];

  function pickOneFromTwelve(group) {
    const index = Math.floor(Math.random() * 12)
    console.log(index);
    return group[index];
  }
  return (
    <div className="App">
      <header className="App-header">
        <h2>astrodice</h2>
        <div className="dieValue">
          {pickOneFromTwelve(planets)}
        </div>
        <div className="dieValue">
          {pickOneFromTwelve(zodiac)}
        </div>
        <div className="dieValue">
          {pickOneFromTwelve(houses)} house
        </div>
      </header>


    </div>
  );
}

export default App;
