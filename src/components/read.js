import React from 'react';
import '../App.css';
import { Movies } from './movies';
import axios from 'axios';

export class Read extends React.Component{

 constructor(){
        super();
        this.ReloadData = this.ReloadData.bind(this);
    }

    state = {
        //Movie Json Data
        movies: []
    };

    //Data reload for ease
    ReloadData(){
        axios.get('http://localhost:4000/api/movies')
        .then((response)=>{
            this.setState({movies: response.data})
          }
      )
      .catch((error)=>{
            console.log(error)
        }
        );
    }

    //API Data link
    componentDidMount(){
        axios.get('http://localhost:4000/api/movies')
        .then((response)=>{
              this.setState({movies: response.data})
          }
      )
      .catch((error)=>{
            console.log(error)
        }
        );
    }

    render(){
        return (
            <div className="App">
                <h1>This is the read component.</h1>
                <Movies movies={this.state.movies} ReloadData={this.ReloadData}></Movies>
            </div>
          );
      }
  }