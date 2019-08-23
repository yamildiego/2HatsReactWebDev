import React, { Component } from 'react';
import { InputGroup, FormControl } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class InputSearch extends Component {
    state = { isMobile: this.props.isMobile }
    componentWillReceiveProps = (nextProps) => {
        if (this.props.isMobile !== nextProps.isMobile) {
            this.setState({ isMobile: nextProps.isMobile })
        }
    }
    render() {
        return (
            <InputGroup className="m-2">
                <InputGroup.Prepend>
                    <InputGroup.Text>
                        <FontAwesomeIcon icon="search" className={this.state.isMobile ? "SearchIconMobile" : "SearchIcon"} />
                    </InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                    className={this.state.isMobile ? "SearchInputMobile" : "SearchInput"}
                    placeholder="Search foods..."
                />
            </InputGroup>
        );
    }
}

export default InputSearch;