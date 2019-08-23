import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import InputSearch from './InputSearch';
import DatePicker from '../DatePicker/DatePicker';
import './Search.css';

class Search extends Component {
    state = { isMobile: this.props.isMobile }
    componentWillReceiveProps = (nextProps) => {
        if (this.props.isMobile !== nextProps.isMobile) {
            this.setState({ isMobile: nextProps.isMobile })
        }
    }
    render() {
        return (
            <React.Fragment>
                {
                    this.state.isMobile &&
                    <div className="Search">
                        <div className="d-flex flex-nowrap justify-content-center">
                            <div className="w-100 p-3">
                                <InputSearch isMobile={this.state.isMobile} />
                            </div>
                        </div>
                    </div>
                }
                {
                    !this.state.isMobile &&
                    <Container className="Search" fluid>
                        <Row className="justify-content-md-center">
                            <Col md="6">
                                <InputSearch isMobile={this.state.isMobile} />
                                <DatePicker isMobile={this.state.isMobile} />
                            </Col>
                        </Row>
                    </Container>
                }
            </React.Fragment>
        );
    }
}

export default Search;