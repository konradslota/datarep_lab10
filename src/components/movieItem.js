import React from 'react';
import axios from 'axios';
import '../App.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import e from 'cors';
import {Link} from 'react-router-dom';

//exports MovieItem which is used in app.js file
export class MovieItem extends React.Component {
    
    constructor() {
        super();
        this.DeleteMovie = this.DeleteMovie.bind(this);
    }

    //Delete movie method
    DeleteMovie(e){
        e.preventDefault();
        axios.delete('http://localhost:4000/api/movies/'+this.props.movie._id)
        .then(()=>{
            this.props.ReloadData();
        })
        .catch((err)=>{
            console.log(err);
        });
    }

    render() {
        return (
            <div className="App">
                <Card>
                    <Card.Header>{this.props.movie.title}</Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            <img src={this.props.movie.poster} width="200" height="200"></img>
                            <footer className="blockquote-footer">
                                <cite>{this.props.movie.year}</cite>
                            </footer>
                        </blockquote>
                    </Card.Body>
                    <Link to={"/edit/" + this.props.movie._id} className="btn btn-primary">Edit</Link>
                    <Button variant="danger" onClick={this.DeleteMovie}>Delete</Button>
                </Card>
            </div>
        );
    }
}