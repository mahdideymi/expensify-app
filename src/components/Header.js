import React from 'react';
import { NavLink, Route } from 'react-router-dom';

const Header = () => (
    <header>
        <h2>Expensify</h2>
        <NavLink to="/" activeClassName="is-active" exact={true}>Home |</NavLink>
        <NavLink to="/create" activeClassName="is-active"> Create | </NavLink>
        <NavLink to="/help" activeClassName="is-active">Help</NavLink>
    </header>
);

export default Header;
// <NavLink to="/edit" activeClassName="is-active">Edit | </NavLink>