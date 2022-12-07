import Expenses from "./components/Expenses/Expenses.js";
import NewExpense from "./components/NewExpense/NewExpense.js";
const App = () => {
  const expense = [
    { title: "Car", amount: 294.67, date: new Date(2022, 12, 5) },
    { title: "Books", amount: 2.78, date: new Date(2022, 12, 5) },
    { title: "Bike", amount: 94.67, date: new Date(2022, 12, 5) },
    { title: "Electronics", amount: 24.6, date: new Date(2022, 12, 5) },
  ];
  const addExpenseHandler = (expenses) => {
    console.log("In aoo");
    console.log(expenses);
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expense} />
    </div>
  );
};
export default App;
