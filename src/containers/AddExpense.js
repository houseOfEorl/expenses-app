import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addExpense } from '../actions';
import PropTypes from 'prop-types';

// const AddExpense = ({ dispatch }) => {
class AddExpense extends Component {

    constructor(props) {
        super(props)
        this.handleOnClick = this.handleOnClick.bind(this);
        this.clearForm = this.clearForm.bind(this);
    }


    handleOnClick(e) {
        e.preventDefault()
        const { dispatch } = this.props;

        let name = this.inputName.value;
        let date = this.inputDate.value;
        let amount = this.inputAmount.value;

        //create object with the expense values that we will add
        var expense = {name:name, date:date, amount:amount}

        dispatch(addExpense(expense));

        this.clearForm();
    }

    clearForm() {
        this.inputName.value = "";
        this.inputDate.value = "";
        this.inputAmount.value = "";
    }


    render() {
        return (
            <div>
                <input ref={ node => this.inputName = node } type="text" placeholder="Name"  />
                <input ref={ node => this.inputDate = node } type="text" placeholder="Date" />
                <input ref={ node => this.inputAmount = node } type="number" placeholder="Amount"  />

                <button type="submit" onClick={this.handleOnClick}>
                    Add
                </button>
            </div>
        )
    }
}

AddExpense.propTypes = {
    dispatch: PropTypes.func.isRequired
}


export default connect()(AddExpense)