import React from 'react';


var MovieSearch = React.createClass({
    render: function () {
        return(
            <div className="Search__block">
                <h5>Search</h5>
                <input
                    className="search-input"
                    type="text"
                    placeholder="Look for a Movie"
                    onChange={this.props.onSearch}
                />
                {/*<select value={this.props.value} onChange={this.handleChange}>*/}
                    {/*<option value="actors">actors</option>*/}
                    {/*<option value="name">name</option>*/}
                {/*</select>*/}
            </div>
        )

    }
});

export default MovieSearch;