import React, {Component} from 'react';
import axios from 'axios';
const localServer = 'http://localhost:3001/api/movies/';

class MovieComment extends Component {
   constructor(){
       super();

       this.state={
                   ID: 0, 
                   title: "",
                   overview: "",
                   type:"",
                   posterpath:"",
                   rating: "",
                   comment:""

    }
    this.inputRating=this.inputRating.bind(this);
    this.inputComment=this.inputComment.bind(this);
    this.updateRatingComment=this.updateRatingComment.bind(this);
    }

    componentWillReceiveProps(props) {
        this.setState({ 
                        ID: props.ID,
                        title: props.title,
                        overview: props.overview,
                        type: props.type,
                        posterpath: props.posterpath
                         ,rating: props.rating
                         ,comment: props.comment

                    });
      };
    
    inputRating(val){
        this.setState({rating:val});
        let newRating = {
            "rating": val
        }
        axios.put(localServer+this.state.ID, newRating)
    };

    inputComment(val){
        this.setState({comment:val});
        let newComment = {
            "comment": val
        }
        axios.put(localServer+this.state.ID, newComment)
    };

    updateRatingComment(){
       
                this.props.refresh();
                
                this.setState({ 
                    ID: this.props.ID,
                    title: this.props.title,
                    overview: this.props.overview,
                    type: this.props.type,
                    posterpath: this.props.posterpath,
                    rating: this.props.rating,
                    comment: this.props.comment
                });

                this.props.select(this.state)

            }   
    


    render(){
        return (
            <div>
                    {/* <p>Reivew:</p> */}
                    <div className="movieInfo">
                            <h2><b>{this.state.title}</b></h2>
                            <p>({this.state.type})</p> 
                            <p>ID:{this.state.ID}</p>      
                    </div>
                    <div className="imgOverview" >
                        <img src={this.state.posterpath} alt="Please select a movie!"></img>
                        <span>{this.state.overview}</span> 
                    </div>

                    <div className="rightbottom">
                        
                        <div className="review">
                            Rating: <input id="rating" onChange={(e)=>this.inputRating(e.target.value)} value={this.state.rating}/>
                            Comment: <textarea id="comment" onChange={(e)=>this.inputComment(e.target.value)} value={this.state.comment}/>
                            <button onClick={()=>this.updateRatingComment()}>Submit</button>
                        </div>
                    </div>
            </div>
        )
    }
}

export default MovieComment;