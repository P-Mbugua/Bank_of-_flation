import React, { useState } from "react";

function AddTransactionForm({ onAddTransaction }) {
  const [formData, setFormData] = useState({
    date: "",
    description: "",
    category: "",
    amount: 0
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:8001/transactions', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        onAddTransaction(data); // Assuming data returned is the new transaction object
        setFormData({
          date: "",
          description: "",
          category: "",
          amount: 0
        });
      });
  };

  return (
    <div className="ui segment">
      <form className="ui form" onSubmit={handleSubmit}>
        <div className="inline fields">
          <input type="date" name="date" value={formData.date} onChange={handleChange} />
          <input type="text" name="description" value={formData.description} onChange={handleChange} placeholder="Description" />
          <input type="text" name="category" value={formData.category} onChange={handleChange} placeholder="Category" />
          <input type="number" name="amount" value={formData.amount} onChange={handleChange} placeholder="Amount" step="0.01" />
        </div>
        <button className="ui button" type="submit">
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default AddTransactionForm;