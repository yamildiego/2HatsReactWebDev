import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Image } from 'react-bootstrap';
import CircleData from './../CircleData/CircleData';
import ImageProfile from './../../assets/image/profile.png';
import './BasicInformationSM.css';

class BasicInformation extends Component {
    render() {
        return (
            <React.Fragment>
                {
                    this.props.isMobile ?
                        <div className="d-flex BasicInformationMobile noselect">
                            <div className="p-2">
                                <Image src={ImageProfile} roundedCircle />
                            </div>
                            <div className="BasicInformationName mr-auto p-2">
                                {this.props.personal.first_name}
                            </div>
                            <div className="p-2">
                                <CircleData number={this.props.personal.weight_kg} unit="kg" mobile />
                            </div>
                            <div className="p-2">
                                <CircleData number={this.props.personal.height_cm} unit="cm" mobile />
                            </div>
                        </div>
                        :
                        <div className="BasicInformation noselect">
                            <div className="d-flex bd-highlight">
                                <div className="p-2 flex-fill bd-highlight d-flex flex-column justify-content-center">
                                    <CircleData number={this.props.personal.weight_kg} unit="kg" />
                                </div>
                                <div className="p-2 flex-fill bd-highlight text-center">
                                    <Image src={ImageProfile} roundedCircle />
                                </div>
                                <div className="p-2 flex-fill bd-highlight d-flex flex-column justify-content-center">
                                    <CircleData number={this.props.personal.height_cm} unit="cm" />
                                </div>
                            </div>
                            <div className="PersonalPanelName">
                                {`${this.props.personal.first_name} ${this.props.personal.last_name}`}
                            </div>
                        </div>
                }
            </React.Fragment>
        );
    }
}

function mapStateToProps(state, props) {
    return {
        isMobile: state.general.isMobile,
        personal: state.personal
    }
}

export default connect(mapStateToProps)(BasicInformation);