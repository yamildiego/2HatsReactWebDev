import React, { Component } from 'react';
import { Container, Row, Col, InputGroup, Button, FormControl } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Search.css';

class Search extends Component {
    state = {}
    render() {
        return (
            <Container className="Search" fluid>
                <Row className="justify-content-md-center">
                    <Col md="6">
                        <InputGroup className="mb-3 m-2 ">
                            <InputGroup.Prepend>
                                <InputGroup.Text>
                                    <FontAwesomeIcon icon="search" />
                                </InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                                className="border-left-0"
                                placeholder="Search foods..."
                            />
                        </InputGroup>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col xs="1" className="SearchArrow d-flex flex-column justify-content-center">
                        <FontAwesomeIcon icon="chevron-left" />
                    </Col>
                    <Col xs="4">
                        <div className="SearchDay">
                            Today
                        </div>
                    </Col>
                    <Col xs="1" className="SearchArrow d-flex flex-column justify-content-center">
                        <FontAwesomeIcon icon="chevron-right" />
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Search;