import React, { Component } from 'react';
import ExpenseNavbar from '../containers/ExpenseNavbar';
import VisibleExpenseList from '../containers/VisibleExpenseList';
import ExpenseModal from '../containers/ExpenseModal';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ExpenseNavbar />
        <ExpenseModal />
        <VisibleExpenseList />
      </div>
    );
  }
}

export default App;
