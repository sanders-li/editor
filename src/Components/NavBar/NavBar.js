import React from 'react';

import './NavBar.css'

export default class NavBar extends React.Component {
    render() {
        return (
            <div>
                <nav className="navbar fixed-top navbar-light bg-light">
                    <a className="navbar-brand" href="/">Dynamic Handsontable</a>
                </nav>
            </div>
        )
    }
}