import React, { Component } from 'react';
import { Image } from 'react-bootstrap';
import { capitalize, capitalizeAll } from '../../assets/utils/utils';
import './ItemFood.css';

class ItemFood extends Component {
    render() {
        return (
            <div className="ItemFood d-flex bd-highlight mt-3 mb-3">
                <div className="p-2 bd-highlight">
                    <Image src={this.props.thumb} />
                </div>
                <div className="w-100 d-flex d-flex justify-content-between ItemFoodTexts">
                    <div className="p-2 bd-highlight">
                        <div className="ItemFoodText">
                            {capitalizeAll(this.props.foodName)}
                        </div>
                        <div className="ItemFoodSubtitle">
                            {this.props.servingQty} {this.props.servingUnit}
                            {(this.props.servingWeightGrams) ? `(${Math.trunc(this.props.servingWeightGrams)} g)` : ""}
                        </div>
                    </div>
                    <div className="p-2 bd-highlight">
                        <div className="ItemFoodText text-right">
                            {Math.trunc(this.props.nfCalories)} cal
                    </div>
                        <div className="ItemFoodSubtitle">
                            {capitalize(this.props.mealType)}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ItemFood;