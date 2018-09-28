import React, { Component } from 'react';
import SaveExpense from '../containers/SaveExpense';
import VisibleExpenseList from '../containers/VisibleExpenseList';
import ExpenseModal from '../containers/ExpenseModal';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SaveExpense />
        <ExpenseModal />
        <VisibleExpenseList />
      </div>
    );
  }
}

export default App;
