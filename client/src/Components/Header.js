import React from 'react';
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'

const Header = () => {
    return (
        <Navbar bg="dark" variant="dark" className="mb-4">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="/news.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
              color="white"
            />{' '}
          UK News
          </Navbar.Brand>
        </Container>
      </Navbar>    
    )
}

export default Header;