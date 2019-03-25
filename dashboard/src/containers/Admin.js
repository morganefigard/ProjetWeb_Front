import React, { Component } from 'react';
import { Row, Col, Container } from 'reactstrap';
import ArtistsForm from '../components/ArtistsForm';
import NavBarHeader from '../components/NavbarHeader';
import ArtistsList from '../components/ArtistsList';

export default class Admin extends Component {
  render() {
    return (
      <div>
        <NavBarHeader></NavBarHeader>
        <Container>
          <Row>
            <Col lg="4" md="6">
              <ArtistsForm></ArtistsForm>
            </Col>
          </Row>
          <Row>
            <Col lg="12" md="12">
              <ArtistsList></ArtistsList>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}
