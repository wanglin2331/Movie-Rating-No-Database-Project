import React, { Component } from 'react';               //'react' is the path, so it is included quote
import axios from 'axios';
const localServer = 'http://localhost:3001/api/movies/';

class MovieList extends Component {

    removeMovie(ID) {
        axios.delete( localServer + `${ID}` )
        .then( response => {
          this.props.refresh();
        });
      }

    render() {

        return (
        <div className="movieDisplay">
            {this.props.moviesToDisplay.map(movie => {
                console.log(movie);
                return (
                    <div>
                        <div className="movieList">
                           
                            <img src={movie.posterpath}
                            onClick={()=>{this.props.selectMovie(movie)}}/>
                            {/* <p>{movie.title}</p> */}
                            <button onClick={()=>{this.removeMovie(movie.ID)}}>Remove</button>
                            
                        </div>
                    </div>
                )
            })
            }          
           
        </div>
        )
    }
}

export default MovieList;

