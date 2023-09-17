import React from "react";

function Button(props) {
   const { onClick } = props;

    return (
        <div>
            <button onClick={onClick}>Change Color to Blue</button>
        </div>
    );
}

export default Button;