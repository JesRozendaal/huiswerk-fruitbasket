import React from 'react';
import './FormInput.css';

const FormInput = ({fieldName, idName, name, value, changeHandler}) => {
    return (
        <label htmlFor={idName}>
            {fieldName}
            <input
                id={idName}
                name={name}
                type="text"
                value={value}
                onChange={changeHandler}
            />
        </label>
    );
};

export default FormInput;