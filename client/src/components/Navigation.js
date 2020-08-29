import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { logout } from '../actions/authActions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class Navigation extends Component {
  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
  }
  render() {
    return (
      <Navbar bg='dark' variant='dark' expand='sm'>
        <LinkContainer to='/'>
          <Navbar.Brand>Menter</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='mr-auto'>
            {!this.props.isAuthenticated && (
              <LinkContainer to='/register'>
                <Nav.Link>Register</Nav.Link>
              </LinkContainer>
            )}
            {!this.props.isAuthenticated && (
              <LinkContainer to='/login'>
                <Nav.Link>Login</Nav.Link>
              </LinkContainer>
            )}
            {this.props.isAuthenticated && <Nav.Link>Profile</Nav.Link>}
          </Nav>
          {this.props.isAuthenticated && (
            <Nav className='ml-auto'>
              <Nav.Link
                onClick={() => {
                  this.props.history.push('/');
                  this.props.logout();
                }}
              >
                Logout
              </Nav.Link>
            </Nav>
          )}
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => {
      dispatch(logout());
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Navigation));
