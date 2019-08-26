import React, { Component } from 'react';
import { connect } from 'react-redux';
import ItemCommon from './ItemCommon';
import './ListCommon.css';

class ListCommon extends Component {
    render() {
        return (
            <div className="ListCommon">
                <div className="ListCommonTitle">Common</div>
                {
                    this.props.common.map((item, key) => {
                        if (key <= 4)
                            return <ItemCommon key={key} {...item} />
                    })
                }
                {
                    (this.props.common.length === 0) &&
                    <div className="ListCommonNoElement noselect">
                        No items found.
                    </div>
                }
            </div>
        );
    }
}

function mapStateToProps(state, props) {
    return {
        common: state.general.common
    }
}

export default connect(mapStateToProps)(ListCommon);