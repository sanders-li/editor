import React from 'react';

import './NavBar.css'

export default class NavBar extends React.Component {
    render() {
        return (
            <div>
                <nav class="navbar fixed-top navbar-light bg-light">
                    <a class="navbar-brand" href="#">Table</a>
                </nav>
            </div>
        )
    }
}