import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addExpense } from '../actions';
import PropTypes from 'prop-types';

class NavbarExpense extends Component {

    constructor(props) {
        super(props)
        this.handleOnClick = this.handleOnClick.bind(this);
    }

    handleOnClick(e) {
        e.preventDefault()
        const { dispatch } = this.props;

        dispatch(addExpense());
    }

    render() {
        return (
            <div>
                <button type="submit" onClick={this.handleOnClick}>
                    Add
                </button>
            </div>
        )
    }
}

NavbarExpense.propTypes = {
    dispatch: PropTypes.func.isRequired
}


export default connect()(NavbarExpense)