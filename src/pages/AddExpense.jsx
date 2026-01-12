import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useExpenses } from "../context/ExpenseContext";

export default function AddExpense() {
  const { addExpense } = useExpenses();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("Food");

  const save = () => {
    if (!title || !amount) return;

    addExpense({ title, amount, category });
    navigate("/");
  };

  return (
    <div className="app">
      <h2>Add Expense</h2>

      <input
        placeholder="Title"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />

      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={e => setAmount(e.target.value)}
      />

      <select value={category} onChange={e => setCategory(e.target.value)}>
        <option>Food</option>
        <option>Transport</option>
        <option>Bills</option>
        <option>Other</option>
      </select>

      <button onClick={save}>Save</button>
    </div>
  );
}
