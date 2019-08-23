import React, { Component } from 'react';
import { Image } from 'react-bootstrap';
import CircleData from './../CircleData/CircleData';
import ImageProfile from './../../assets/image/profile.fw.png';
import { withGetScreen } from 'react-getscreen'
import './BasicInformationSM.css';

class BasicInformation extends Component {

    render() {
        return (
            <React.Fragment>
                {/* {this.state.isMobile} */}
                {this.state.width < 768 ?
                    <div class="BasicInformationSM d-flex justify-content-between">
                        <Image src={ImageProfile} roundedCircle />
                        {this.props.data.first_name}
                        <CircleData number={this.props.data.weight_kg} unit="kg" mobile />
                        <CircleData number={this.props.data.height_cm} unit="cm" mobile />
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
const options = { mobileLimit: 768, tabletLimit: 800 }
export default withGetScreen(BasicInformation, options);