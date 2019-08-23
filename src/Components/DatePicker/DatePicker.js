import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Moment from 'react-moment';
import './DatePicker.css';

class DatePicker extends Component {
    // getDay = () => {
    //     let today = new Date();
    //     let daySelected = new Date(2015, 11, 31);
    //     let textDay = "";
    //     if (today == daySelected) {
    //         textDay = "Today";
    //     } else {

    //         if (today == daySelected) {
    //             textDay = "Yesterday";
    //         }
    //     }
    //     return textDay;
    // }
    render() {
        let today = new Date();
        let yesterday = new Date();
        let daySelected = new Date(2015, 11, 8);

        // let test =today

        return (
            <div class="DatePicker d-flex justify-content-between">
                <div class="align-self-center text-left">
                    <FontAwesomeIcon icon="chevron-left" className="DatePickerIcon" />
                </div>
                <div className="DatePickerText">
                    {
                        (today === daySelected) &&
                        "Today"
                    }
                    {
                        (yesterday === daySelected) &&
                        "Yesterday"
                    }
                    {/* 1976-04-19T12:59-0500 */}
                    {
                        (today !== daySelected && (yesterday !== daySelected)) &&
                        <Moment format="DD MMM" withTitle>
                            {daySelected}
                        </Moment>
                    }
                </div>
                <div class="align-self-center text-right">
                    <FontAwesomeIcon icon="chevron-right" className="DatePickerIcon" />
                </div>
            </div>
        );
    }
}

export default DatePicker;