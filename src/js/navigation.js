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
            <NavbarBrand href="/">Home</NavbarBrand>

            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle className="dropdown-toggle" nav caret>
                    Skills
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem href="/">Test</DropdownItem>
                    <DropdownItem href="/">Test123</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
                <NavItem>
                  <NavLink href="/coffee">Coffee</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/">About</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/">Contact</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
      </section>
    );
  }
}
export default Navigation;
