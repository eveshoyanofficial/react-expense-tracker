import { createContext, useContext, useEffect, useState } from "react";

const ExpenseContext = createContext();

export const ExpenseProvider = ({ children }) => {
  const [expenses, setExpenses] = useState([]);

  // Load from storage
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("expenses"));
    if (saved) setExpenses(saved);
  }, []);

  // Save to storage
  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  const addExpense = (expense) => {
    setExpenses(prev => [
      { ...expense, id: Date.now() },
      ...prev
    ]);
  };

  const deleteExpense = (id) => {
    setExpenses(prev => prev.filter(e => e.id !== id));
  };

  return (
    <ExpenseContext.Provider
      value={{ expenses, addExpense, deleteExpense }}
    >
      {children}
    </ExpenseContext.Provider>
  );
};

export const useExpenses = () => useContext(ExpenseContext);
