import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddExpense from "./pages/AddExpense";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddExpense />} />
      </Routes>
    </BrowserRouter>
  );
}
