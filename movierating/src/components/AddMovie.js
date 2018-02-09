import React, {Component} from 'react';
import axios from 'axios';
const localServer = 'http://localhost:3001/api/movies/';


class AddMovie extends Component {
    constructor(){
        super();
        this.state={title: "",
                    overview: "",
                    type:"",
                    posterpath:"",
                    rating:"",
                    comment:""
        }

        this.inputTitle=this.inputTitle.bind(this);
        this.inputType=this.inputType.bind(this);
        this.inputOverview=this.inputOverview.bind(this);
        this.inputPoster=this.inputPoster.bind(this);
        this.addMovie=this.addMovie.bind(this);
        this.ClearFields=this.ClearFields.bind(this);
    }

    ClearFields(){
        document.getElementById("titlefield").value = "";
        document.getElementById("typefield").value = "";
        document.getElementById("imagefield").value = "";
        document.getElementById("overviewfield").value = "";
    };

    inputTitle(val){
        this.setState({title: val});
    };

    inputType(val){
        this.setState({type: val})
    };

    inputOverview(val){
        this.setState({overview: val})
    };

    inputPoster(val){
        this.setState({posterpath: val})
    };

    addMovie(){
        let newMovie={
            "title": this.state.title,
            "overview": this.state.overview,
            "type": this.state.type,
            "posterpath": this.state.posterpath,
            "rating": this.state.rating,
            "comment": this.state.comment

        };
        console.log('newMovie', newMovie)
        axios.post(localServer, newMovie).then(response=>
            {
                this.setState({
                    title: "",
                    overview: "",
                    type:"",
                    posterpath:"",
                    rating:"",
                    comment:""
                    });
                this.ClearFields();
                this.props.refresh();
            }

            )       
    }



    render() {
        return (
            <div className="addMovie">
                <p>Add Your Favorite Movie</p>
                <input id="titlefield" onChange={(e)=>this.inputTitle(e.target.value)} placeholder="title"/>
                <input id="typefield" onChange={(e)=>this.inputType(e.target.value)} placeholder="type"/>
                <input id="imagefield" onChange={(e)=>this.inputPoster(e.target.value)} placeholder="image"/>
                <input id="overviewfield" onChange={(e)=>this.inputOverview(e.target.value)} placeholder="overview"/>
                <button disabled={!this.state.title} onClick={()=>this.addMovie()}>Submit Movie</button>
            </div>
        )
    }
}

export default AddMovie;