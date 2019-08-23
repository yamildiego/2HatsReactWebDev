import React, { Component } from 'react';
import { Col, Image } from 'react-bootstrap';
import BasicInformation from './../BasicInformation/BasicInformation';
// import TechnicalInformation from './../TechnicalInformation/TechnicalInformation';
import './PersonalPanel.css';

class PersonalPanel extends Component {
    state = {}
    render() {
        return (
            <Col lg="4" className="PersonalPanel h-100 d-inline-block">
                <BasicInformation data={this.props.data} />
                {/* <TechnicalInformation data={this.props.data} /> */}
            </Col>
        );
    }
}

export default PersonalPanel;