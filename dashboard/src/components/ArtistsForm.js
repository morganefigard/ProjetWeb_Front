import React, { Component } from 'react'
import { Form, FormGroup, Label, Input, Button, Alert } from 'reactstrap';
import './ArtistsForm.css'

export default class ArtistsForm extends Component {
    constructor() {
        super();

        this.state = {
            visible: false,
            artistNameValue: '',
            artistNameAlert: ''
          };
      
        this.onDismiss = this.onDismiss.bind(this);
        this.addArtist = this.addArtist.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.updateNameValue = this.updateNameValue.bind(this);
    }

    handleSubmit() {
        if(this.state.artistNameValue != '') {
            this.setState({ artistNameAlert: this.state.artistNameValue });
            this.setState({ visible: true });
            this.setState({ artistNameValue: '' });
        }
    }

    addArtist() {
        console.log("Adding an artist");
    }
    
    onDismiss() {
        this.setState({ visible: false });
    }

    updateNameValue(evt) {
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
                <Input type="date" name="birth" id="birth" />
            </FormGroup>
            <FormGroup>
                <Label for="followers">Number of followers</Label>
                <Input type="number" name="followers" id="followers" />
            </FormGroup>
            <FormGroup>
                <Button onClick={this.handleSubmit}>Add an artist</Button>
            </FormGroup>
            <FormGroup>
                <Alert color="success" isOpen={this.state.visible} toggle={this.onDismiss}>
                    {this.state.artistNameAlert} added!
                </Alert>
            </FormGroup>
        </Form>
      </div>
    )
  }
}
