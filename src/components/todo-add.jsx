const TodoAdd = () => {
  return (
    <div className="flex justify-between mb-5">
      <div className="border-2 border-teal-300 p-2 rounded-lg w-full">
        <input
          type="text"
          placeholder="Create a new todo"
          className="outline-none focus:outline-none"
        />
      </div>
      <button className="bg-teal-500 px-7 py-2 rounded-xl text-white ml-5">
        Create
      </button>
    </div>
  );
};

export default TodoAdd;
