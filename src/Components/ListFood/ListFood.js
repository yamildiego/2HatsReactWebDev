import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Col } from 'react-bootstrap';
import ItemFood from './../ItemFood/ItemFood';
import './ListFood.css';
import { getDateFormatted } from './../../assets/utils/utils';

class ListFood extends Component {
    render() {
        return (
            <Col md="7" className="ListFood pr-0">
                {
                    this.props.intakeList.map((item, key) => {
                        return <ItemFood key={key} {...item} />
                    })
                }
            </Col>
        );
    }
}

function getIntakeList(elements, date) {
    let intakeList = [];
    elements.forEach((element) => {
        if (getDateFormatted(date) === element.date) {
            intakeList = element.intakeList;
        }
    });

    return intakeList;
}

function mapStateToProps(state, props) {
    console.log(state)
    return {
        intakeList: getIntakeList(state.personal.dataPoints, state.general.dateSelected)
        // intakeList: []
    }
}

export default connect(mapStateToProps)(ListFood);