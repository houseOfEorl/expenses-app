import React, { Component } from 'react';
import AddExpense from '../containers/AddExpense';
import VisibleExpenseList from '../containers/VisibleExpenseList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AddExpense />
        <VisibleExpenseList />
      </div>
    );
  }
}

export default App;
