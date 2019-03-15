import React, { Component } from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Container } from 'reactstrap';

export default class Navbarsss extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
        <Container>
          <NavbarBrand href="/">Projet Web 2019: Dashboard</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="https://github.com/morganefigard">Morgane Figard</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/soufia97">Soufia Maherzi</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Admin
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem href="http://www.google.com">
                    Go to admin page
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}
