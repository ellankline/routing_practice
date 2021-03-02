import React from 'react';
import { Link } from '@reach/router'

const Header = () => {
    return (
        <div>
            <Link to = "/home">Home</Link>
            <Link to = "/4">Number</Link>
            <Link to = "/hello">Word</Link>
            <Link to = "/hello/blue/red">Colors</Link>
        </div>
    );
};

export default Header;