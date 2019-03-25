import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import ArtistsForm from '../components/ArtistsForm';
import NavBarHeader from '../components/NavbarHeader';

export default class Admin extends Component {
  render() {
    return (
      <div>
        <NavBarHeader></NavBarHeader>
        <Row>
          <Col lg="4" md="6">
            <ArtistsForm></ArtistsForm>
          </Col>
        </Row>
      </div>
    )
  }
}
