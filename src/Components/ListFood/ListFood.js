import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Col } from 'react-bootstrap';
import ItemFood from './../ItemFood/ItemFood';
import './ListFood.css';

let today = new Date();

class ListFood extends Component {
    render() {
        let isToday = today.toLocaleDateString().substring(0, 10) === this.props.dateSelected.toLocaleDateString().substring(0, 10);
        return (
            <Col md="7" className="ListFood pr-0">
                {
                    this.props.intakeList.map((item, key) => {
                        return <ItemFood key={key} index={key} />
                    })
                }
                {
                    (this.props.intakeList.length === 0) &&
                    <div className="ListFoodNoElement noselect">
                        No food item added{isToday ? ' yet' : ''}.
                    </div>
                }
            </Col>
        );
    }
}

function mapStateToProps(state, props) {
    return {
        intakeList: state.personal.intakeList,
        dateSelected: state.general.dateSelected
    }
}

export default connect(mapStateToProps)(ListFood);