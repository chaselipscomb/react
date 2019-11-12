import React from "react";
import API from "./utlis/API";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from "axios"

let Img = require('react-image')


const row = {
    backgroundColor: 'lightblue',
    height: 'auto',
};
const picture = {
    padding: '5px',
    textAlign: 'center',
    marginLeft: '30px'

};
const text = {
    textAlign: 'center',
    padding: '25px'

}



class employeetemplate extends React.Component {
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
                this.setState({ results: res.data.message, error: "" });
            })
            .catch(err => this.setState({ error: err.message }));
    };

    render() {
        return (
            <React.Fragment>
                {this.state.users.map(user => (
                    <Container style={row}>
                        <Row>
                            <Col style={picture}><Img src={user.picture.large} /></Col>
                            <Col style={text}>{user.name.first} {user.name.last}</Col>
                            <Col style={text}>{user.cell}</Col>
                            <Col style={text}>{user.email}</Col>
                            <Col style={text}>{user.dob.date}</Col>
                        </Row>
                    </Container>
                ))}
            </React.Fragment>
        );
    }
}

export default employeetemplate;



