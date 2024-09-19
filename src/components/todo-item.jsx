const TodoItem = () => {
  return (
    <div className="w-full border border-teal-300 p-5 rounded-lg flex justify-between">
      <div className="font-semibold text-teal-800 ">
        Todo 1 <span className="text-blue-300 ml-4">{`(On Progress)`}</span>
      </div>
      <div className="flex space-x-2">
        <button className="text-lime-600 hover:font-semibold">complete</button>
        <button className="text-red-400 hover:font-semibold">delete</button>
      </div>
    </div>
  );
};

export default TodoItem;
