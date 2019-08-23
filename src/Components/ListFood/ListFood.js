import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './ListFood.css';

class ListFood extends Component {
    state = {}
    render() {
        return (
            <Col lg="8" className="ListFood">
                <div>
                    <FontAwesomeIcon icon="spinner" className="fa-pulse" />
                    alimentos
                    </div>
            </Col>
        );
    }
}

export default ListFood;