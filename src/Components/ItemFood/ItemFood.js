import React, { Component } from 'react';
import { Image } from 'react-bootstrap';
import ImageFood from "./../../assets/image/profile.fw.png";
import './ItemFood.css';
import { capitalize, capitalizeAll } from '../../assets/utils/utils';

class ItemFood extends Component {
    state = {}
    render() {
        return (
            <div className="ItemFood d-flex bd-highlight mt-3 mb-3">
                <div className="p-2 bd-highlight">
                    <Image src={this.props.thumb} />
                </div>
                <div className="w-100 d-flex d-flex justify-content-between ItemFoodTexts">
                    <div className="p-2 bd-highlight">
                        <div className="ItemFoodText">
                            {capitalizeAll(this.props.food_name)}
                        </div>
                        <div className="ItemFoodSubtitle">
                            {this.props.serving_qty} {this.props.serving_unit} ({Math.trunc(this.props.serving_weight_grams)} g)
                    </div>
                    </div>
                    <div className="p-2 bd-highlight">
                        <div className="ItemFoodText text-right">
                            {Math.trunc(this.props.nf_calories)} cal
                    </div>
                        <div className="ItemFoodSubtitle">
                            {capitalize(this.props.meal_type)}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ItemFood;