import React, { useState } from 'react';
import Header from './Header/header.jsx';

function Button() {
    const [headerColor, setHeaderColor] = useState('lightblue');

    const changeColor = () => {
        const colorBlue = 'blue';
        setHeaderColor(colorBlue);
    };

    return (
        <div>
            <Header backgroundColor={headerColor} />
            <button onClick={changeColor}>Change to Color Blue</button>
        </div>
    )
}

export default Button;