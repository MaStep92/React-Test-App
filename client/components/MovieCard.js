import React from 'react';

var MovieCard = React.createClass({
    getInitialState: function() {
        return {
            visible: false,
            showComponent: true
        };
    },
    readmoreClick: function(e) {
        e.preventDefault();
        this.setState({visible: true});
    },

    deleteMovie: function () {
        this.setState({showComponent:false})
    },

    render: function() {
        var buttonClass = this.state.showComponent ? '' : 'none';
        var id = this.props.data.id,
            name = this.props.data.name,
            actors = this.props.data.actors,
            description = this.props.data.description,
            visible = this.state.visible;


        return(
            <div className={buttonClass}>
            <div className="card col-md-4 ">
                <div className="card-block">
                    <div className="movie__id">{id}</div>
                    <h2 className="card-title">{name} </h2>
                    <p>{actors}</p>
                    <p className={'news__big-text ' + (visible ? '': 'none')}>{description}</p>
                    <div className="buttons">
                    <a href="#"  onClick={this.readmoreClick}
                       className={'news__readmore btn btn-primary' + (visible ? 'none': '')}>
                        Read More
                    </a>
                    <button type="button" className="btn btn-danger" onClick={this.deleteMovie}>Remove movie</button>
                    </div>
                </div>
            </div>
            </div>
        )
    }
});

export default MovieCard;