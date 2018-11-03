import React, { Component } from 'react';
import NavbarExpense from '../containers/NavbarExpense';
import VisibleExpenseList from '../containers/VisibleExpenseList';
import ExpenseModal from '../containers/ExpenseModal';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavbarExpense />
        <ExpenseModal />
        <VisibleExpenseList />
      </div>
    );
  }
}

export default App;
