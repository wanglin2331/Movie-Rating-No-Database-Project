import React, {Component} from 'react';

class SearchMovie extends Component {
    render() {
        return (
            <div className="searchtitle">
                  <p>Movies</p>
                  <input id="searchField" onChange={(e)=>this.props.inputSearch(e.target.value)} placeholder="Search Movie Title"/>
                  <button onClick={()=>this.props.showSearchResult()}>Search</button>
                  <button onClick={()=>this.props.refresh()}>Go Back</button>
            </div>
        )
    }
}

export default SearchMovie;