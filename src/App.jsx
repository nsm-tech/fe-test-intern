import TodoAdd from "./components/todo-add";
import TodoItem from "./components/todo-item";

const App = () => {
  return (
    <>
      <div className="flex justify-center items-center w-full h-screen">
        <div className="w-96 h-auto">
          <TodoAdd />
          <div className="h-72 w-full overflow-auto space-y-5">
            <TodoItem />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
