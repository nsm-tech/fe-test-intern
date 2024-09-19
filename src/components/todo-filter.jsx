const TodoFilter = () => {
  return (
    <div className="flex justify-between items-center">
      <input
        type="text"
        placeholder="Search Todo"
        className="outline-none focus:outline-none p-3 w-9/12 mb-5 border-b-2 border-teal-300"
      />

      <div className="border-b-2 border-teal-300 ml-5 py-2 -mt-3 w-3/12">
        <select className="focus:outline-none w-full">
          <option value="all">All</option>
          <option value="On Progress">On Progress</option>
          <option value="Complete">Complete</option>
        </select>
      </div>
    </div>
  );
};

export default TodoFilter;
