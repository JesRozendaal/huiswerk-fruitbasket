import React from 'react';
import './App.css';

function App() {
    const [numberOfStrawberries, setNumberOfStrawberries] = React.useState(0);
    const [numberOfBananas, setNumberOfBananas] = React.useState(0);
    const [numberOfApples, setNumberOfApples] = React.useState(0);
    const [numberOfKiwis, setNumberOfKiwis] = React.useState(0);

  return (
    <>
      <h1>Fruitmand bezorgservice</h1>
        <div className="types-of-fruit">
            <h2>&#127827; Aardbeien</h2>
            <button
                type="button"
                onClick = {() => {setNumberOfStrawberries(numberOfStrawberries - 1)}}
                disabled={numberOfStrawberries === 0}>
                -
            </button>
            {numberOfStrawberries}
            <button
                type="button"
                onClick = {() => {setNumberOfStrawberries(numberOfStrawberries + 1)}}>
                +
            </button>
        </div>

        <div className="types-of-fruit">
            <h2>&#127820; Bananen</h2>
            <button
                type="button"
                onClick = {() => {setNumberOfBananas(numberOfBananas - 1)}}
                disabled={numberOfBananas === 0}>
                -
            </button>
            {numberOfBananas}
            <button
                type="button"
                onClick={() => {setNumberOfBananas(numberOfBananas + 1)}}>
                +
            </button>
        </div>

        <div className="types-of-fruit">
            <h2>&#127823; Appels</h2>
            <button
                type="button"
                onClick = {() => {setNumberOfApples(numberOfApples - 1)}}
                disabled={numberOfApples === 0}>
                -
            </button>
            {numberOfApples}
            <button
                type="button"
                onClick={() => {setNumberOfApples(numberOfApples +1)}}>
                +
            </button>
        </div>

        <div className="types-of-fruit">
            <h2>&#129373; Kiwi's</h2>
            <button
                type="button"
                onClick={() => setNumberOfKiwis(numberOfKiwis - 1)}
                disabled={numberOfKiwis === 0}>
                -
            </button>
            {numberOfKiwis}
            <button
                type="button"
                onClick={() => setNumberOfKiwis(numberOfKiwis + 1)}>
                +
            </button>
        </div>
        <button
            type="button"
            onClick={() => setNumberOfStrawberries(0)}>
            Reset
        </button>
    </>
  );
}

export default App;
