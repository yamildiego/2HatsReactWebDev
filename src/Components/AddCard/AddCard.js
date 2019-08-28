import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Image } from 'react-bootstrap';
import ModalAddContainer from './../ModalAdd/ModalAddContainer';
import ModalAdd from './../ModalAdd/ModalAdd';
import Loading from './../Loading/Loading';
import InputNumberCustom from './../InputNumberCustom/InputNumberCustom';
import * as actionsGeneral from './../../actions/general';
import './AddCard.css';

class AddCard extends Component {

    closeModalAdd = () => {
        this.props.dispatch(actionsGeneral.addModalSet(false));
        this.props.dispatch(actionsGeneral.servingSizeSet(0));
    }

    render() {
        return (
            <React.Fragment>
                {
                    this.props.addVisible &&
                    <ModalAddContainer>
                        <ModalAdd closeModal={this.closeModalAdd}>
                            <Loading loading={this.props.loadingAdd} />
                            {
                                !this.props.loadingAdd &&
                                <div className="AddCard">
                                    <div className="AddCardHeader d-flex justify-content-between">
                                        <div>
                                            <Image
                                                className="AddCardImage"
                                                src={this.props.itemFoodSelected.photo.thumb}
                                            />
                                            <div className="AddCardTitle">{this.props.itemFoodSelected.food_name}</div>
                                        </div>
                                    </div>
                                    <div className="AddCardBody d-flex justify-content-between">
                                        <div>
                                            <InputNumberCustom
                                                serving_qty={this.props.itemFoodSelected.serving_qty}
                                                serving_unit={this.props.itemFoodSelected.serving_unit}
                                            />
                                        </div>
                                        <div>
                                            <div className="AddCardNumber">{parseInt((1 / this.props.itemFoodSelected.serving_qty) * this.props.itemFoodSelected.serving_weight_grams * this.props.servingSize)}</div>
                                            <div className="AddCardDetail">grams</div>
                                        </div>
                                        <div>
                                            <div className="AddCardNumber">{parseInt((1 / this.props.itemFoodSelected.serving_qty) * this.props.itemFoodSelected.nf_calories * this.props.servingSize)}</div>
                                            <div className="AddCardDetail">calories</div>
                                        </div>
                                    </div>
                                </div>
                            }
                        </ModalAdd>
                    </ModalAddContainer>
                }
            </React.Fragment>
        );
    }
}

function mapStateToProps(state, props) {
    return {
        addVisible: state.general.addVisible,
        loadingAdd: state.general.loadingAdd,
        itemFoodSelected: state.general.itemFoodSelected,
        servingSize: state.general.servingSize
    }
}

export default connect(mapStateToProps)(AddCard);