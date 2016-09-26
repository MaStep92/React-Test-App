import React from 'react';

var MovieAdd = React.createClass({
    render: function () {
        return(
            <div className="col-md-8">
                <form className="form-signin">
                    <h2 className="form-signin-heading">Add movie</h2>
                    <input type="text" className="form-control" placeholder="Name" />
                    <input type="text" className="form-control" placeholder="Year" required=""/>
                    <input type="text" className="form-control" placeholder="Format" required=""/>
                    <input type="text" className="form-control" placeholder="Actors" required=""/>
                    <input type="text" className="form-control" placeholder="description" required=""/>
                    <button className="btn btn-lg btn-primary btn-block" type="submit">Add</button>
                </form>
            </div>
        )
    }
});

export default MovieAdd