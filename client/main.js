import React from 'react';
import ReactDOM from 'react-dom';
import Movies from './components/Movies.js';
import Nav from './components/MovieMenu.js';

import './components/MovieApp.less';
import movies from './films.js';



var App = React.createClass({
    render: function () {
        return (
            <div className='MovieApp'>
                <Nav/>
                <Movies data={movies}/>
            </div>
        )
    }
});


ReactDOM.render(
    <App />,
    document.getElementById('mount-point')
);
