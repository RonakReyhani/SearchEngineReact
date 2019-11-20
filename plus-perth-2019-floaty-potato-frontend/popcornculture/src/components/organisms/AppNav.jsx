import React from 'react';
import {Link} from 'react-router';
import Avatar from "../atoms/Avatar";
import 'bootstrap/dist/css/bootstrap.min.css';

let NavBar = (props) => {

  const loginOrProfile = (auth) => {

    return auth.isAuthenticated ?
    <Navbar bg="light" expand="lg">
        <Nav>
            <NavItem className="navbar-text">
                Welcome back {auth.username}
            </NavItem>
            <NavDropdown id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.2">Watch List</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.3">Log out</NavDropdown.Item>
                <NavDropdown.Divider />
            </NavDropdown>
            <Avatar image = {auth.image}/>
        </Nav>       
    </Navbar>
      :
    <Navbar bg="light" expand="lg">
        
        <Nav>
            <NavItem className="navbar-text">
            <NavLink tag={Link} to="/login">Log in</NavLink>
            </NavItem>
        </Nav>       
    </Navbar>
  };

  return (
    <div>
      <Navbar color="inverse" dark full>
      <Navbar.Brand href="#home"><Logo image={}/>Popcorn-Culture</Navbar.Brand>
        {loginOrProfile(props.auth)}
      </Navbar>
    </div>
  );
};

NavBar.propTypes = {
  auth: React.PropTypes.object.isRequired
};

export default NavBar;
