import React from 'react';

const RadioButtons = ({idName, check, name, value, changeHandler, text}) => {
    return (
        <label htmlFor={idName}>
            <input
                id={idName}
                type="radio"
                value={value}
                checked={check}
                name={name}
                onChange={changeHandler}
            />
            {text}
        </label>
    );
};

export default RadioButtons;