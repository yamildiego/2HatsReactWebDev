import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ItemFood from './../ItemFood/ItemFood';
import './ListFood.css';

class ListFood extends Component {
    state = {}
    render() {
        console.log(this.props.intake_list)
        return (
            <Col md="7" className="ListFood pr-0">
                {
                    this.props.intake_list.map((item, key) => {
                        return <ItemFood key={key} {...item} />
                    })
                }
            </Col>
        );
    }
}

export default ListFood;