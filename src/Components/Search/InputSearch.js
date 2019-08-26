import React, { Component } from 'react';
import { connect } from 'react-redux';
import { InputGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as actions from './../../actions/general';

class InputSearch extends Component {
    handleOnKeyDown = (event) => {
        if (event.which === 27)
            this.props.dispatch(actions.searchModalSet(false))
    }

    handleOnChange = (event) => {
        if (this.inputSearch.value === "")
            this.props.dispatch(actions.searchModalSet(false, ""))
        else
            this.props.dispatch(actions.searchModalSet(true, this.inputSearch.value))
    }

    handleOnClick = () => {
        if (this.inputSearch.value !== "")
            this.props.dispatch(actions.searchModalSet(true, this.inputSearch.value))
    }

    setRef = element => this.inputSearch = element;

    render() {
        return (
            <InputGroup className="m-2">
                <InputGroup.Prepend>
                    <InputGroup.Text>
                        <FontAwesomeIcon icon="search" className={this.props.isMobile ? "SearchIconMobile" : "SearchIcon"} />
                    </InputGroup.Text>
                </InputGroup.Prepend>
                <input type="text"
                    onChange={this.handleOnChange}
                    onKeyDown={this.handleOnKeyDown}
                    onClick={this.handleOnClick}
                    className={(this.props.isMobile ? "SearchInputMobile" : "SearchInput") + " form-control"}
                    placeholder="Search foods..."
                    ref={this.setRef}
                    value={this.props.searchText}
                />
            </InputGroup>
        );
    }
}

function mapStateToProps(state, props) {
    return {
        isMobile: state.general.isMobile,
        searchText: state.general.searchText
    }
}

export default connect(mapStateToProps)(InputSearch);