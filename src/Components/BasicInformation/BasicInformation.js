import React, { Component } from 'react';
import { Image } from 'react-bootstrap';
import CircleData from './../CircleData/CircleData';
import ImageProfile from './../../assets/image/profile.fw.png';
import './BasicInformationSM.css';

class BasicInformation extends Component {
    state = { isMobile: this.props.isMobile }
    componentWillReceiveProps = (nextProps) => {
        if (this.props.isMobile !== nextProps.isMobile) {
            this.setState({ isMobile: nextProps.isMobile })
        }
    }
    render() {
        return (
            <React.Fragment>
                {this.state.isMobile ?
                    <div className="d-flex BasicInformationMobile">
                        <div className="p-2">
                            <Image src={ImageProfile} roundedCircle />
                        </div>
                        <div className="BasicInformationName mr-auto p-2">
                            {this.props.data.first_name}
                        </div>
                        <div className="p-2">
                            <CircleData number={this.props.data.weight_kg} unit="kg" mobile />
                        </div>
                        <div className="p-2">
                            <CircleData number={this.props.data.height_cm} unit="cm" mobile />
                        </div>
                    </div>
                    :
                    <div className="BasicInformation">
                        <div className="d-flex bd-highlight">
                            <div className="p-2 flex-fill bd-highlight d-flex flex-column justify-content-center">
                                <CircleData number={this.props.data.weight_kg} unit="kg" />
                            </div>
                            <div className="p-2 flex-fill bd-highlight text-center">
                                <Image src={ImageProfile} roundedCircle />
                            </div>
                            <div className="p-2 flex-fill bd-highlight d-flex flex-column justify-content-center">
                                <CircleData number={this.props.data.height_cm} unit="cm" />
                            </div>
                        </div>
                        <div className="PersonalPanelName">
                            {`${this.props.data.first_name} ${this.props.data.last_name}`}
                        </div>
                    </div>
                }

            </React.Fragment>
        );
    }
}
export default BasicInformation;