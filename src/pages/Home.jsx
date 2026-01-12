import { Link } from "react-router-dom";
import { useExpenses } from "../context/ExpenseContext";
import ExpenseChart from "../component/ExpenseChart";

export default function Home() {
  const { expenses, deleteExpense } = useExpenses();

  const total = expenses.reduce(
    (sum, item) => sum + Number(item.amount),
    0
  );

  const icons = {
    Food: "🍔",
    Transport: "🚌",
    Bills: "💡",
    Other: "📦"
  };

  return (
    <div className="app">
      <h1>Expense Tracker</h1>

      <div className="card total">
        <h2>Total Spent</h2>
        <h1>₦{total}</h1>
      </div>

      <div className="card">
        <ExpenseChart expenses={expenses} />
      </div>

      {expenses.map(exp => (
        <div className="card" key={exp.id}>
          <strong>
            {icons[exp.category]} {exp.title}
          </strong>
          <p>₦{exp.amount}</p>
          <small>{exp.category}</small>

          <button
            style={{
              background: "#ef4444",
              marginTop: "8px"
            }}
            onClick={() => deleteExpense(exp.id)}
          >
            Delete
          </button>
        </div>
      ))}

      <Link to="/add" className="fab">+</Link>
    </div>
  );
}
