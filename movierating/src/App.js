import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

import MovieList from './components/MovieList';
import AddMovie from './components/AddMovie';
import MovieComment from './components/MovieComment';

const localServer = 'http://localhost:3001/api/movies/';

class App extends Component {
  constructor(){
    super();
    this.state = {selectedMovie: {},
                  moviesToDisplay: []};

    this.selectMovie=this.selectMovie.bind(this);
    this.refresh=this.refresh.bind(this);
  }

  componentDidMount () {
    axios({
      method: 'GET',
      url: localServer
    }).then(response=> {
      this.setState({moviesToDisplay:response.data})
    });
  };


  selectMovie(movie) {
    this.setState({selectedMovie: movie})
  };


  refresh(){
    axios({
      method: 'GET',
      url: localServer
    }).then(response=> {
      this.setState({moviesToDisplay:response.data})
    })
  };

  render() {

    return (
      <div className="App">
        
        <header className="App-header">
          <h1 className="title">Rate Your Favorite Movies</h1>
        </header>

        <body>
          <div className="left">
                  <p>Movies</p>
                  <MovieList moviesToDisplay={this.state.moviesToDisplay} selectMovie={this.selectMovie} 
                              refresh={this.refresh}
                  />

                  <p>Add Your Favorite Movie</p>
                  <AddMovie refresh={this.refresh}/>
          </div>

          <div className="right">
              <MovieComment ID={this.state.selectedMovie.ID}
                            title={this.state.selectedMovie.title}
                            overview= {this.state.selectedMovie.overview}
                            type = {this.state.selectedMovie.type}
                            posterpath = {this.state.selectedMovie.posterpath}
                            rating = {this.state.selectedMovie.rating}
                            comment = {this.state.selectedMovie.comment}

                            refresh={this.refresh}
                            select={this.selectMovie}
              />

          </div>
        
        </body>
      </div>
    );
  }
}

export default App;
