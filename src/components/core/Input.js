import React from 'react';

const Input = ({ errors, name, label, className }) => {
    return (
        <div className="input__container">
            <label>{label}</label>
            <div className="input__container__content">
                <input type="text" id={name} name={name} className={className} />
                {errors[name] && errors[name]}
            </div>
        </div>
    )
}

export default Input;