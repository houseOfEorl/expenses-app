import React, { Component } from 'react';
import ExpenseNavbar from '../containers/ExpenseNavbar';
import VisibleExpenseList from '../containers/VisibleExpenseList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ExpenseNavbar />
        {/* <ExpenseModal /> */}
        <VisibleExpenseList />
      </div>
    );
  }
}

export default App;
