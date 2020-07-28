import React, { Component } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownItem,
  DropdownMenu,
} from "reactstrap";
import { BrowserRouter, Link } from "react-router-dom";

class Navigation extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
    };
    this.toggle = this.toggle.bind(this);
  }
  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <section>
        <Navbar className="bg-secondary fixed-top" dark expand="md">
          <div className="container-fluid">
            <BrowserRouter basename="/">
              <Link to="/">
                <NavbarBrand>Homea</NavbarBrand>
              </Link>

              <NavbarToggler onClick={this.toggle} />
              <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                  <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle className="dropdown-toggle" nav caret>
                      Skills
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem href="/">Dummy</DropdownItem>
                      <DropdownItem href="/">Dummy2</DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                  <Link to="/coffee">
                    <NavItem>
                      <NavLink href="/coffee">Coffee</NavLink>
                    </NavItem>
                  </Link>

                  <NavItem>
                    <NavLink href="/about">About</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/">Contact</NavLink>
                  </NavItem>
                </Nav>
              </Collapse>
            </BrowserRouter>
          </div>
        </Navbar>
      </section>
    );
  }
}
export default Navigation;
