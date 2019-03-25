import React, { Component } from 'react'
import { Form, FormGroup, Label, Input } from 'reactstrap';
import './ArtistsForm.css'

export default class ArtistsForm extends Component {
    render() {
    return (
      <div className="ArtistsForm">
        <Form>
            <FormGroup>
                <Label for="name">Name of the artist</Label>
                <Input type="text" name="name" id="name" placeholder="Ex. : Bob Marley" />
            </FormGroup>
            <FormGroup>
                <Label for="birth">Birth date</Label>
                <Input type="date" name="birth" id="birth" />
            </FormGroup>
            <FormGroup>
                <Label for="followers">Number of followers</Label>
                <Input type="number" name="followers" id="followers" />
            </FormGroup>
        </Form>
      </div>
    )
  }
}
