import React, { useState } from "react";
import AccountContainer from "./AccountContainer";
import AddTransactionForm from "./AddTransactionForm";

function App() {
  const [transactions, setTransactions] = useState([]);

  const handleAddTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction]);
  };

  return (
    <div className="ui raised segment">
      <div className="ui segment violet inverted">
        <h2>The Royal Bank of Flatiron</h2>
      </div>
      <AddTransactionForm onAddTransaction={handleAddTransaction} />
      <AccountContainer transactions={transactions} />
    </div>
  );
}

export default App;