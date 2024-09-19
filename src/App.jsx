import TodoAdd from "./components/todo-add";
import TodoFilter from "./components/todo-filter";
import TodoItem from "./components/todo-item";

const App = () => {
  return (
    <>
      <div className="flex justify-center items-center w-full h-screen">
        <div className="w-3/5 h-auto">
          <TodoAdd />
          <TodoFilter />
          <div className="h-72 w-full overflow-auto space-y-5">
            <TodoItem />
            <TodoItem />
            <TodoItem />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
