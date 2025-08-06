import React from 'react'

const Input = ({ inputValue, title, placeholder }) => {
    return (
        <div>
            <h2>{title}</h2>
            <input value={inputValue}type="text" placeholder={placeholder} />
        </div>
    )
}

export default Input