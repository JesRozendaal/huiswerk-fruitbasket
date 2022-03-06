import React from 'react';
import Fruit from "./components/Fruit";
import './App.css';

// Stappenplan
// 1. Maak voor één fruitsoort een div aan met daarin het plaatje, de naam, 2 buttons en het aantal gekozen fruit.
// 2. Zet de initialState op 0
// 3. Zet er een onClick handler op om bij de - knop 1 eraf te halen en bij de plusknop 1 erbij op te tellen.
// 4. Zet op de - knop disabled als het aantal 0 is.
// 5. Maak een reset button die alle fruitsoorten weer op 0 zet.
// 6. Maak een formulier met 4 invoervelden voor tekst
// 7. Voeg een selectbox met bezorgfrequentie toe in het formulier.
// 8. Maak 2 radiobuttons in het formulier.
// 9. Maak een opmerkingenveld in het formulier.
// 10. Voeg een checkbox toe voor de voorwaarden in het formulier.
// 11. Maak een verzend button om het formulier te verzenden.
// 12. Zorg ervoor dat alle waardes uit het formulier gelogd worden als je op verzenden drukt.
// 13. Ga componenten maken!
// 14. Maak een component aan voor de 4 soorten fruit.
// 15. Vervang de code van de div voor het component en kijk of het werkt.
// 16. Schrijf ook de code voor de andere soorten fruit.
// 17.

function App() {
    const [numberOfStrawberries, setNumberOfStrawberries] = React.useState(0);
    const [numberOfBananas, setNumberOfBananas] = React.useState(0);
    const [numberOfApples, setNumberOfApples] = React.useState(0);
    const [numberOfKiwis, setNumberOfKiwis] = React.useState(0);

  return (
    <>
            <h1>Fruitmand bezorgservice</h1>
        <Fruit
            fruitName="&#127827; Aardbeien"
            onClick1={() => {setNumberOfStrawberries(numberOfStrawberries - 1)}}
            number={numberOfStrawberries}
            onClick2={() => {setNumberOfStrawberries(numberOfStrawberries + 1)}}
        />
        <Fruit
            fruitName="&#127820; Bananen"
            onClick1={() => {setNumberOfBananas(numberOfBananas - 1)}}
            number={numberOfBananas}
            onClick2={() => {setNumberOfBananas(numberOfBananas + 1)}}
        />
        <Fruit
            fruitName="&#127823; Appels"
            onClick1={() => {setNumberOfApples(numberOfApples - 1)}}
            number={numberOfApples}
            onClick2={() => {setNumberOfApples(numberOfApples +1)}}
        />
        <Fruit
            fruitName="&#129373; Kiwi's"
            onClick1={() => setNumberOfKiwis(numberOfKiwis - 1)}
            number={numberOfKiwis}
            onClick2={() => setNumberOfKiwis(numberOfKiwis + 1)}
        />
        <button
            type="button"
            onClick={() => {setNumberOfStrawberries(0); setNumberOfBananas(0); setNumberOfApples(0);setNumberOfKiwis(0)}}>
            Reset
        </button>

        <form className="delivery-form">
        <label htmlFor="first-name-field">
            Voornaam
            <input
                id="first-name-field"
                type="text"
            />
        </label>
            <label htmlFor="last-name-field">
                Achternaam
                <input
                    id="last-name-field"
                    type="text"
                    />
            </label>
            <label htmlFor="age-field">
                Leeftijd
                <input
                    id="age-field"
                    type="text"
                    />
            </label>
            <label htmlFor="zipcode-field">
                Postcode
                <input
                    id="zipcode-field"
                    type="text"
                    />
            </label>
            Bezorgfrequentie
            <select>
                <option>
                    Iedere week
                </option>
                <option>
                    Om de week
                </option>
                <option>
                    Iedere maand
                </option>
            </select>

            <input
                type="radio"/>
            Overdag
            <input
                type="radio"/>
            's Avonds

            Opmerking
            <input
                type="text"
                />

            <input
                type="checkbox"/>
            Ik ga akkoord met de voorwaarden

            <button
                type="button">
                Verzend
            </button>
        </form>
    </>
  );
}

export default App;
