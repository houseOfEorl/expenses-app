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

    // handlOnChange({ target }) {
    //     this.setState({
    //         [target.name]: target.value
    //     })
    // }


    handleOnClick(e) {
        e.preventDefault()
        const { dispatch } = this.props;

        let name = this.inputName.value;
        let date = this.inputDate.value;
        let amount = this.inputAmount.value;

        let isCreditOrDebit = this.inputIsCreditOrDebit.value;
        let paymentCategory = this.inputPaymentCategory.value;
        let bank = this.inputBank.value;
        let isCreditCard = this.inputIsCreditCard.checked;
        let isPaid = this.inputIsPaid.checked;

        //create object with the expense values that we will add
        var expense = {name:name, date:date, amount:amount, isCreditOrDebit:isCreditOrDebit, paymentCategory:paymentCategory, bank:bank, isCreditCard:isCreditCard, isPaid:isPaid}

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
                <section>
                    <input ref={ node => this.inputName = node } type="text" placeholder="Name"  />
                    <input ref={ node => this.inputDate = node } type="text" placeholder="Date" />
                    <input ref={ node => this.inputAmount = node } type="number" placeholder="Amount"  />
                </section>
                <section>                    
                    <input ref={ node => this.inputIsCreditOrDebit = node } type="text" placeholder="C/D" />
                    <input ref={ node => this.inputPaymentCategory = node } type="text" placeholder="Category" />
                    <input ref={ node => this.inputBank = node } type="text" placeholder="Bank" />
                </section>
                <section>
                    IsCreditCard? <input ref={ node => this.inputIsCreditCard = node } type="checkbox" placeholder="CreditCard" />
                    IsPaid? <input ref={ node => this.inputIsPaid = node } type="checkbox" placeholder="IsPaid?" />
                    <button type="submit" onClick={this.handleOnClick}>
                        Add
                    </button>
                </section>
                
            </div>
        )
    }
}

AddExpense.propTypes = {
    dispatch: PropTypes.func.isRequired
}


export default connect()(AddExpense)