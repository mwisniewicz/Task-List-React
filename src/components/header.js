import React from 'react';

const Header = (props) => {
    return (
        <header>
            <h1>{props.title}</h1>
            <h3>{props.subtitle}</h3>
        </header>
    );
};

Header.defaultProps = {
    title: 'Some default title',
    subtitle: 'Some default subtitle'
};

export default Header;