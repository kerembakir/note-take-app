import React, { Component } from 'react';
import {
  withRouter,
  Link
} from 'react-router-dom';
import {
  Nav,
  Navbar,
} from 'react-bootstrap';
import Routes from './Routes';
import RouteNavItem from './components/RouteNavItem';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      userToken: null,
    };
  }

  updateUserToken = (userToken) => {
    this.setState({
      userToken: userToken
    });
  }

  handleNavLink = (event) => {
  event.preventDefault();
  this.props.history.push(event.currentTarget.getAttribute('href'));
  }

  render() {

    const childProps = {
      userToken: this.state.userToken,
      updateUserToken: this.updateUserToken,
    };

    return (
      <div className="App container">
        <Navbar fluid collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/">Note App</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <RouteNavItem onClick={this.handleNavLink} href="/signup">Signup</RouteNavItem>
              <RouteNavItem onClick={this.handleNavLink} href="/login">Login</RouteNavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Routes childProps={childProps} />
      </div>
    );
  }
}

export default withRouter(App);