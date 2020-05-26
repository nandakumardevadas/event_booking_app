import React from 'react';

const Dropdown = ({ errors, name, label, className, options, onChange }) => {
    return (
        <div className="input__container">
        <label>{label}</label>
            <div className="input__container__content">
                <select id={name} name={name} className={className} onChange={onChange}>
                    {
                        Object.keys(options).map((value, key) => {
                            return <option key={key} value={options[value]}>{value}</option>
                        })
                    }
                </select>
            {errors[name] && errors[name]}
            </div>
        </div>
    )
}

export default Dropdown;