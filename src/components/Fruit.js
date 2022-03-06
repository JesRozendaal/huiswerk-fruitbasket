import React from 'react';
import './Fruit.css';

const Fruit = ({fruitName, number, onClick1, onClick2}) => {
    return (
        <div className="types-of-fruit">
            <h2>{fruitName}</h2>
            <button
                type="button"
                onClick={onClick1}
                disabled={number === 0}>
                -
            </button>
            {number}
            <button
                type="button"
                onClick={onClick2}
                >
                +
            </button>
        </div>
    );
};

export default Fruit;