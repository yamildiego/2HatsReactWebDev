import React, { Component } from 'react';
import { connect } from 'react-redux';
import { InputGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as actions from './../../actions/general';

class InputSearch extends Component {
    handleOnKeyPress = (e) => {
        if (e.which === 27) {
            this.props.dispatch(actions.searchModalSet(false))
        } else {
            this.props.dispatch(actions.searchModalSet(true))
        }
    }

    handleOnClick = () => this.props.dispatch(actions.searchModalSet(true))

    render() {
        return (
            <InputGroup className="m-2">
                <InputGroup.Prepend>
                    <InputGroup.Text>
                        <FontAwesomeIcon icon="search" className={this.props.isMobile ? "SearchIconMobile" : "SearchIcon"} />
                    </InputGroup.Text>
                </InputGroup.Prepend>
                <input type="text"
                    onKeyDown={this.handleOnKeyPress}
                    onClick={this.handleOnClick}
                    className={(this.props.isMobile ? "SearchInputMobile" : "SearchInput") + " form-control"}
                    placeholder="Search foods..."
                />
            </InputGroup>
        );
    }
}

function mapStateToProps(state, props) {
    return {
        isMobile: state.general.isMobile
    }
}

export default connect(mapStateToProps)(InputSearch);