import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './CustomToggle.css';

class CustomToggle extends Component {

  handleClick = (e) => {
    e.preventDefault();
    this.props.onClick(e);
  }

  render() {
    return (
      <div className="CustomToggle" onClick={this.handleClick}>
        {this.props.children}
        <FontAwesomeIcon icon="chevron-down" className="float-right" />
      </div>
    );
  }
}

export default CustomToggle;