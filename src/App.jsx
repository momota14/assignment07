import Header from "./components/Header";
import TodoList from "./components/TodoList";

export default function App() {
  return (
    <div className="grid place-items-center bg-blue-100 min-h-screen px-6 font-sans">
      <Header/>
      <TodoList />
    </div>
  );
}
