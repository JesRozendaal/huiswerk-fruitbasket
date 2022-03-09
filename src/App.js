import React, {useState} from 'react';
import './App.css';
import Logo from './assets/screenshot-logo.png';
import Fruit from './components/Fruit';
import FormInput from "./components/FormInput";
import RadioButtons from "./components/RadioButtons";
import Button from "./components/Button";


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
// Opdracht 2
// 13. Ga componenten maken!
// 14. Maak een component aan voor de 4 soorten fruit.
// 15. Vervang de code van de div voor het component en kijk of het werkt.
// 16. Schrijf ook de code voor de andere soorten fruit.
// Opdracht 3
// 17. Maak componenten voor de verschillende herhalende onderdelen, zoals de input velden en de radio buttons.
// 18. Voeg eventueel styling toe!

function App() {
    const [numberOfStrawberries, setNumberOfStrawberries] = useState(0);
    const [numberOfBananas, setNumberOfBananas] = useState(0);
    const [numberOfApples, setNumberOfApples] = useState(0);
    const [numberOfKiwis, setNumberOfKiwis] = useState(0);

    const [formFirstName, setFormFirstName] = useState('');
    const [formLastName, setFormLastName] = useState('');
    const [formAge, setFormAge] = useState(0);
    const [formZipcode, setFormZipcode] = useState('');
    const [formDeliveryRadio, setFormDeliveryRadio] = useState('');
    //const [formSelectField, setFormSelectField] = useState('');
    const [formCommentField, setFormCommentField] = useState('');
    const [checkedTerms, toggleCheckedTerms] = useState(false);


     return (
    <>
        <header>
            <img src={Logo}
                 alt="Je mag toch niet naar buiten"
                 />
        </header>
<main>
        <h1>Maak uw keuze:</h1>
        <Fruit
            fruitName="&#127827; Aardbeien"
            clickHandler1={() => {setNumberOfStrawberries(numberOfStrawberries -1)}}
            number={numberOfStrawberries}
            clickHandler2={() => {setNumberOfStrawberries(numberOfStrawberries + 1)}}
        />
        <Fruit
            fruitName="&#127820; Bananen"
            clickHandler1={() => {setNumberOfBananas(numberOfBananas - 1)}}
            number={numberOfBananas}
            clickHandler2={() => {setNumberOfBananas(numberOfBananas + 1)}}
        />
        <Fruit
            fruitName="&#127823; Appels"
            clickHandler1={() => {setNumberOfApples(numberOfApples - 1)}}
            number={numberOfApples}
            clickHandler2={() => {setNumberOfApples(numberOfApples + 1)}}
        />
        <Fruit
            fruitName="&#129373; Kiwi's"
            clickHandler1={() => setNumberOfKiwis(numberOfKiwis - 1)}
            number={numberOfKiwis}
            clickHandler2={() => setNumberOfKiwis(numberOfKiwis + 1)}
        />
        <Button
            text="Reset"
            disabled={false}
            clickHandler={() => {setNumberOfStrawberries(0); setNumberOfBananas(0); setNumberOfApples(0);setNumberOfKiwis(0)}}
            />

        <h1>Vul uw gegevens in:</h1>
        <form className="delivery-form">
            <FormInput
                fieldName="Voornaam"
                idName="first-name-field"
                name="first-name"
                value={formFirstName}
                changeHandler={(e) => setFormFirstName(e.target.value)}
            />
            <FormInput
                fieldName="Achternaam"
                idName="last-name-field"
                name="last-name"
                value={formLastName}
                changeHandler={(e) => setFormLastName(e.target.value)}
            />
            <FormInput
                fieldName="Leeftijd"
                idName="age-field"
                name="age"
                value={formAge}
                changeHandler={(e) => setFormAge(e.target.value)}
            />
            <FormInput
                fieldName="Postcode"
                idName="zipcode-field"
                name="zipcode"
                value={formZipcode}
                changeHandler={(e) => setFormZipcode(e.target.value)}
            />

            <label htmlFor="delivery-option">
                Bezorgfrequentie
                <select id="delivery-option">
                    <option
                        value="every-week"
                    >
                        Iedere week
                    </option>
                    <option
                        value="every-other-week"
                    >
                        Om de week
                    </option>
                    <option
                        value="every-month"
                    >
                        Iedere maand
                    </option>
                </select>
            </label>

            <RadioButtons
                idName="day-radio"
                name="delivery"
                value="day-delivery"
                check={formDeliveryRadio === "day-delivery"}
                changeHandler={(e) => setFormDeliveryRadio(e.target.value)}
                text="Overdag"
                />
            <RadioButtons
                idName="night-radio"
                name="delivery"
                value="night-delivery"
                check={formDeliveryRadio === "night-delivery"}
                changeHandler={(e) => setFormDeliveryRadio(e.target.value)}
                text="'s Avonds"
            />

            <label htmlFor="form-comments">
            Opmerking
                <textarea
                    id="form-comments"
                    rows="4"
                    cols="35"
                    value={formCommentField}
                    onChange={(e) => setFormCommentField(e.target.value)}
                    />
            </label>

            <label htmlFor="conditions-checkbox">
            <input
                type="checkbox"
                checked={checkedTerms}
                onChange={() => toggleCheckedTerms(!checkedTerms)}
            />
            Ik ga akkoord met de voorwaarden
            </label>

            <Button
                text="Verzend"
                disabled={!checkedTerms}
                clickHandler={() => console.log(numberOfStrawberries, numberOfBananas, numberOfApples, numberOfKiwis,
                                                formFirstName, formLastName, formAge, formZipcode, formDeliveryRadio, formCommentField, checkedTerms)}
                />
            </form>
</main>
    </>
  );
}

export default App;
