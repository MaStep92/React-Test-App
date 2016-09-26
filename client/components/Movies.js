import React from 'react';
import MovieCard from './MovieCard.js';
import MovieSearch from './MovieSearch.js';


import movies from './../films.js';

var Movies = React.createClass({
    getInitialState() {
        return {
            displayedMovies: movies
        };
    },

    handleSearch(e) {
        const searchQuery = e.target.value.toLowerCase();
        const displayedMovies = movies.filter(movie => {
            const searchString = movie.name.toLowerCase() + movie.description.toLowerCase();
            return searchString.indexOf(searchQuery) !== -1;
        });

        this.setState({
            displayedMovies
        })
    },


    render: function () {
        var data = this.state.displayedMovies;
        var movieCards;

        var buttonClass = this.state.showComponent ? 'active' : '';

        if (data.length > 0) {
            movieCards = data.map(function (item, index) {



                return (
                    <div key={index}>
                        <MovieCard data={item}/>
                    </div>
                )
            });

        } else {
            movieCards = <p>К сожалению новостей нет</p>;
        }

        return (
            <div className="Movies row">
                <MovieSearch onSearch={this.handleSearch} />
                {movieCards}
            </div>
        )
    }
});

export default Movies;