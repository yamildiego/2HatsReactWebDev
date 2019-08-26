import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import BasicInformation from './../BasicInformation/BasicInformation';
import Goal from './../Goal/Goal';
// import TechnicalInformation from './../TechnicalInformation/TechnicalInformation';
import './PersonalPanel.css';

class PersonalPanel extends Component {
    render() {
        return (
            <Col md="5" className="PersonalPanel h-100 d-inline-block">
                <BasicInformation data={this.props.data} />
                <Goal
                    calories_by_meal_type={this.props.calories_by_meal_type}
                    daily_goal={this.props.data.daily_goal}
                    consumed={686}
                />
                {/* <TechnicalInformation data={this.props.data} /> */}
            </Col>
        );
    }
}

export default PersonalPanel;