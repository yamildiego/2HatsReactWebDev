import React, { Component } from 'react';
import { connect } from 'react-redux';
import ItemBranded from './ItemBranded';
import './ListBranded.css';

class ListBranded extends Component {
    render() {
        return (
            <div className="ListBranded">
                <div className="ListBrandedTitle">Branded</div>
                {
                    this.props.branded.map((item, key) => {
                        if (key <= 4)
                            return <ItemBranded key={key} {...item} />
                    })
                }
                {
                    (this.props.branded.length === 0) &&
                    <div className="ListBrandedNoElement noselect">
                        No items found.
                    </div>
                }
            </div>
        );
    }
}

function mapStateToProps(state, props) {
    return {
        branded: state.general.branded
    }
}

export default connect(mapStateToProps)(ListBranded);