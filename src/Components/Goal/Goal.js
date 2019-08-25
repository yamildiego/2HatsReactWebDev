import React, { Component } from 'react';
import { ProgressBar } from 'react-bootstrap';
import CardGold from './CardGoal';
import GoalData from './GoalData';
import './Goal.css';
import { capitalize } from './../../assets/utils/utils';

class Goal extends Component {
    state = {}
    render() {
        let percentage = Math.trunc(this.props.consumed * 100 / this.props.daily_goal);
        return (
            <div className="Goal">
                <div className="d-flex justify-content-between">
                    <CardGold
                        isMobile={this.props.isMobile}
                        calories={this.props.consumed}
                        subtitle="consumed"
                        align="left"
                    />
                    <CardGold
                        isMobile={this.props.isMobile}
                        calories={this.props.daily_goal}
                        subtitle="daily goal"
                        align="right"
                    />
                </div>
                <div>
                    <ProgressBar now={percentage} label={`${percentage}%`} srOnly />
                    <div
                        className="GoalPercentage"
                        style={{ paddingLeft: (percentage - 2) + '%' }}
                    >
                        {percentage}%
                    </div>
                </div>
                <div className="d-flex justify-content-between">
                    {
                        Object.keys(this.props.calories_by_meal_type).map((key, i) => {
                            return <GoalData key={i} isMobile={this.props.isMobile} text={capitalize(key)} number={this.props.calories_by_meal_type[key]} />
                        })
                    }
                </div>
            </div>
        );
    }
}

export default Goal;