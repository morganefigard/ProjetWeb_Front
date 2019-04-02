import React, { Component } from 'react'
import { Form, FormGroup, Label, Input, Button, Alert } from 'reactstrap';
import './ArtistsForm.css';
import axios from 'axios';

export default class ArtistsForm extends Component {
    constructor() {
        super();

        this.state = {
            visible: false,
            artistNameValue: '',
            artistNameAlert: '', 
            artistDateValue: new Date(1970, 0, 1),
            artistFollowersValue: 0,
            artists: []
          };
      
        this.onDismiss = this.onDismiss.bind(this);
        this.addArtist = this.addArtist.bind(this);
        this.addArtistToDB = this.addArtistToDB.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.clearSubmit = this.clearSubmit.bind(this);
        this.updateNameValue = this.updateNameValue.bind(this);
    }

    handleSubmit() {
        if(this.state.artistNameValue !== '') {
            this.addArtistToDB();
            this.addArtist();
            this.setState({ artistNameAlert: this.state.artistNameValue });
            this.setState({ visible: true });
            this.setState({ artistNameValue: '' });
            this.setState({ artistDateValue: '' });
            this.setState({ artistFollowersValue: 0 });
        }
    }

    clearSubmit() {
        this.setState({ artistNameValue: '' });
        this.setState({ artistDateValue: '' });
        this.setState({ artistFollowersValue: 0 });
    }

    addArtist() {
        console.log("Adding an artist to the artists array");
        this.setState(prevState => ({
            artists: [...prevState.artists, { "name": this.state.artistNameValue, "birthdate": this.state.artistDateValue, "followers": this.state.artistFollowersValue }]
          }))
    }

    addArtistToDB() {
        axios.put("http://localhost:3030/artist", { "name": this.state.artistNameValue, "birth": this.state.artistDateValue, "followers": this.state.artistFollowersValue });
    }
    
    onDismiss() {
        this.setState({ visible: false });
    }

    updateNameValue(evt) {
        evt.preventDefault();
        this.setState({
          artistNameValue: evt.target.value
        });
    }

    render() {
    return (
      <div className="ArtistsForm">
        <Form>
            <FormGroup>
                <Label for="name">Name of the artist</Label>
                <Input type="text" name="name" id="name" placeholder="Ex. : Bob Marley" value={this.state.artistNameValue} onChange={this.updateNameValue} />
            </FormGroup>
            <FormGroup>
                <Label for="birth">Birth date</Label>
                <Input type="date" name="birth" id="birth" value={this.state.artistDateValue} onChange={(event) => this.setState({artistDateValue: event.target.value})} />
            </FormGroup>
            <FormGroup>
                <Label for="followers">Number of followers</Label>
                <Input type="number" name="followers" id="followers"  value={this.state.artistFollowersValue} onChange={(event) => this.setState({artistFollowersValue: event.target.value})} />
            </FormGroup>
            <FormGroup>
                <Button onClick={this.handleSubmit}>Add an artist</Button>
                <Button color="link" size="sm" className="pull-right" onClick={this.clearSubmit}>Clear</Button>
            </FormGroup>
            <FormGroup>
                <Alert color="success" isOpen={this.state.visible} toggle={this.onDismiss}>
                    {this.state.artistNameAlert} added!
                </Alert>
            </FormGroup>
        </Form>
        <ul>
            {this.state.artists.map(function(artist, index){
                return (
                    <li key={index}>Name: {artist.name}, birthdate: {artist.birthdate}, followers: {artist.followers}</li>
                )
            })}
        </ul>
      </div>
    )
  }
}
