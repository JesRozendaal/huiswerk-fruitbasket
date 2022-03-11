import React from 'react';
import './Fruit.css';

const Fruit = ({fruitName, number, clickHandler1, clickHandler2}) => {
    return (
        <div className="types-of-fruit">
            <h2>{fruitName}</h2>
            <button
                type="button"
                onClick={clickHandler1}
                disabled={number === 0}>
                -
            </button>
            {number}
            <button
                type="button"
                onClick={clickHandler2}
                >
                +
            </button>
        </div>
    );
};

export default Fruit;