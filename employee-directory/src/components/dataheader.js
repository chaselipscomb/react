import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

const widths = {
    width: '19%'
  };
  const borders = {
    border: '1px solid grey'
  };

function dataheader() {
    return (
        <React.Fragment>
            <Container>
                <Navbar expand="lg" variant="light" bg="light" style = {borders}>
                    <Navbar.Brand style={widths}>Image</Navbar.Brand>
                    <Navbar.Brand style={widths}>Name</Navbar.Brand>
                    <Navbar.Brand style={widths}>Phone</Navbar.Brand>
                    <Navbar.Brand style={widths}>Email</Navbar.Brand>
                    <Navbar.Brand style={widths}>DOB</Navbar.Brand>
                </Navbar>
            </Container>
        </React.Fragment>
    );
}

export default dataheader;



