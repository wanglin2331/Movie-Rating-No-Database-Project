const axios = require('axios');
const apikey='66f45b015bdcd182e17253ae5c2ac852';
const externalMovieUrl='https://api.themoviedb.org/3/movie/';
const moviePosterImageUrl='https://image.tmdb.org/t/p/w500/';


let movieID = [198663,1858,274855,181808,269149,374720,19995,173897,297762];
let movies=[];
let ID=0;

for (i=0; i<movieID.length; i++){
    axios({
        method: 'GET',
        url: externalMovieUrl+movieID[i]+'?api_key='+apikey
      }).then(response=> {
          const {original_title, overview}=response.data;
          //let tMDBid=id;
          const {name} = response.data.genres[1];
          let type = name;
          const posterpath = moviePosterImageUrl+response.data.poster_path
          ID++;
          let title = original_title;
          let rating='';
          let comment='';
        movies.push({ID, title, overview, type, posterpath, rating, comment})
      });
}


module.exports = {
    
    read: (req,res)=> {
        res.send(movies);
    },

    create: (req,res)=> {
        console.log('req.ody', req.body)
        const {title, overview, type, posterpath, rating, comment} = req.body;
        ID++;
        console.log('title', title)
        movies.push({ID, title, overview, type, posterpath, rating, comment});
        res.send(movies);
    },

    update: (req,res)=> {
        movies.forEach((movie,index)=>{
            if (movie.ID==(req.params.id)){
                let updatedMovie = Object.assign({},movie,req.body);
                movies.splice(index,1,updatedMovie);
            }
        })
        res.send(movies);
    },

    delete: (req, res) => {
        movies.forEach((movie,index)=>{
            if(movie.ID==(req.params.id)){
                movies.splice(index,1);
            }
        })
        res.send(movies);
    }
  
}