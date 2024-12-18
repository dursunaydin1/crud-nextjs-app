import { AiOutlinePlus } from "react-icons/ai";

const TodoForm = ({ newTodo, setNewTodo, addTodo }) => (
  <form
    onSubmit={addTodo}
    className="mb-6 w-full sm:w-[600px] flex items-center space-x-4"
  >
    <input
      type="text"
      placeholder="Enter Todo..."
      value={newTodo.title}
      onChange={(e) => setNewTodo({ ...newTodo, title: e.target.value })}
      className="flex-grow p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    <button
      type="submit"
      className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200"
    >
      <AiOutlinePlus className="mr-2" />
      Add
    </button>
  </form>
);

export default TodoForm;
