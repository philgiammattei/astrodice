import { useState } from 'react';
import './App.css';

function App() {
  const [isShowingSymbols, setIsShowingSymbols] = useState(true);

  const planets = [
    { name: 'sun', symbol: '☉' },
    { name: 'moon', symbol: '☽︎' },
    { name: 'mercury', symbol: '☿' },
    { name: 'venus', symbol: '♀' },
    { name: 'mars', symbol: '♂' },
    { name: 'jupiter', symbol: '♃' },
    { name: 'saturn', symbol: '♄' },
    { name: 'uranus', symbol: '♅' },
    { name: 'neptune', symbol: '♆' },
    { name: 'pluto', symbol: '♇' },
    { name: 'north node', symbol: '☊' },
    { name: 'south node', symbol: '☋' },
  ];

  const zodiac = [
    { name: 'aries', symbol: '♈︎' },
    { name: 'taurus', symbol: '♉︎' },
    { name: 'gemini', symbol: '♊︎' },
    { name: 'cancer', symbol: '♋︎' },
    { name: 'leo', symbol: '♌︎' },
    { name: 'virgo', symbol: '♍︎' },
    { name: 'libra', symbol: '♎︎' },
    { name: 'scorpio', symbol: '♏︎' },
    { name: 'sagittarius', symbol: '♐︎' },
    { name: 'capricorn', symbol: '♑︎' },
    { name: 'aquarius', symbol: '♒︎' },
    { name: 'pisces', symbol: '♓︎' },
  ];

  const houses = [
    { name: 'first', symbol: '1' },
    { name: 'second', symbol: '2' },
    { name: 'third', symbol: '3' },
    { name: 'fourth', symbol: '4' },
    { name: 'fifth', symbol: '5' },
    { name: 'sixth', symbol: '6' },
    { name: 'seventh', symbol: '7' },
    { name: 'eighth', symbol: '8' },
    { name: 'ninth', symbol: '9' },
    { name: 'tenth', symbol: '10' },
    { name: 'eleventh', symbol: '11' },
    { name: 'twelfth', symbol: '12' },
  ];

  const numbers = [Math.floor(Math.random() * 12), Math.floor(Math.random() * 12), Math.floor(Math.random() * 12)];
  console.log(numbers);

  return (
    <div className="App">
      <header className="App-header">
        <h2>astrodice</h2>
        <div className="die-value">
          {isShowingSymbols ? <div className="symbol">{planets[numbers[0]].symbol}</div> : planets[numbers[0]].name}
        </div>
        <div className="die-value">
          {isShowingSymbols ? <div className="symbol">{zodiac[numbers[1]].symbol}</div> : zodiac[numbers[1]].name}
        </div>
        <div className="die-value">
          {isShowingSymbols ? houses[numbers[2]].symbol : houses[numbers[2]].name + ' house'}
        </div>
        <div className="symbol-name-toggle">
          <button onClick={() => setIsShowingSymbols(!isShowingSymbols)}>{isShowingSymbols ? 'show full name' : 'show symbols'}</button>
        </div>
      </header>
    </div>
  );
}

export default App;
