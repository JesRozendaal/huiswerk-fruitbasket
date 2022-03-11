import React from 'react';

const Button = ({clickHandler, text, type, disabled}) => {
    return (
        <button
            type="button"
            disabled={disabled}
            onClick={clickHandler}
        >
            {text}
        </button>
    );
};

export default Button;