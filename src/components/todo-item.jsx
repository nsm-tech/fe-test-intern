const TodoItem = () => {
  return (
    <div className="w-full border border-teal-300 p-5 rounded-lg flex justify-between">
      <div className="font-semibold text-teal-800">Todo 1</div>
      <button className="text-red-400 hover:font-semibold">delete</button>
    </div>
  );
};

export default TodoItem;
