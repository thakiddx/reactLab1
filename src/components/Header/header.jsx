import React from 'react';

function Header(props) {
    const { backgroundColor } = props;

    const headerstyle = {
        backgroundColor: backgroundColor,
    };
    return <h1 style={headerstyle}>Hello World!</h1>
}
           

export default Header;