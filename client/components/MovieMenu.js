import React from 'react';

var Nav = React.createClass({
    render: function () {
        return(
            <nav className="navbar navbar-fixed-top navbar-dark bg-inverse">
            <a className="navbar-brand" href="#">React App</a>
            <ul className="nav navbar-nav">
                <li className="nav-item active">
                    <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Add movie</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Import movies</a>
                </li>
            </ul>
        </nav>
        )
    }
});

export default Nav;