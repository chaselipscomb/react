import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import API from "./utlis/API";

class header extends React.Component {
    state = {
        users: []
    };

    componentDidMount() {
        API.getEmployeeList()
            .then(res => this.setState({ users: res.data.results }))
            .catch(err => console.log(err));
    }

    handleInputChange = event => {
        this.setState({ search: event.target.value });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        API.getEmployeeByName(this.state.search)
            .then(res => {
                if (res.data.status === "error") {
                    throw new Error(res.data.message);
                }
                console.log(res)
                this.setState({ results: res.data.message, error: "" });
            })
            .catch(err => this.setState({ error: err.message }));
    };

    render() {
        return (
            <React.Fragment>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="#home"><h1>Employee Directory</h1></Navbar.Brand>
                    <Nav className="mr-auto">
                    </Nav>
                    
                </Navbar>
            </React.Fragment>
        );
    }
}

    export default header;
