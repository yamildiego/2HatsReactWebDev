import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Moment from 'react-moment';
import './DatePicker.css';

class DatePicker extends Component {
    state = { isMobile: this.props.isMobile }
    componentWillReceiveProps = (nextProps) => {
        if (this.props.isMobile !== nextProps.isMobile) {
            this.setState({ isMobile: nextProps.isMobile })
        }
    }
    render() {
        let today = new Date();
        let yesterday = new Date(today.getFullYear(), today.getMonth(), (today.getDate() - 1));
        let daySelected = new Date(2019, 7, 24);
        let isToday = today.toLocaleDateString().substring(0, 10) === daySelected.toLocaleDateString().substring(0, 10);
        let isYesterday = yesterday.toLocaleDateString().substring(0, 10) === daySelected.toLocaleDateString().substring(0, 10);

        return (
            <div className={(this.state.isMobile ? "DatePickerMobile" : "DatePicker") + " d-flex justify-content-between pl-4 pr-4"}>
                <div className="align-self-center text-left">
                    <FontAwesomeIcon icon="chevron-left" className="DatePickerIcon" />
                </div>
                <div className="DatePickerText" >
                    {
                        isToday &&
                        "Today"
                    }
                    {
                        isYesterday &&
                        "Yesterday"
                    }
                    {
                        (!isToday && !isYesterday) &&
                        <Moment format="DD MMM" withTitle>
                            {daySelected}
                        </Moment>
                    }
                </div>
                <div className="align-self-center text-right">
                    <FontAwesomeIcon icon="chevron-right" className="DatePickerIcon" />
                </div>
            </div>
        );
    }
}

export default DatePicker;