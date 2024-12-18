import {
  AiFillEdit,
  AiFillDelete,
  AiOutlineCheck,
  AiOutlineClose,
} from "react-icons/ai";

const TodoItem = ({
  todo,
  editTodoId,
  editTodoTitle,
  setEditTodoId,
  setEditTodoTitle,
  updateTodo,
  deleteTodo,
}) => (
  <div className="w-full">
    <div className="border p-4 rounded-md shadow-md bg-white flex items-center justify-between">
      {editTodoId === todo.id ? (
        // Edit Mode
        <div className="flex-grow">
          <input
            type="text"
            value={editTodoTitle}
            onChange={(e) => setEditTodoTitle(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      ) : (
        // View Mode
        <div>
          <h2 className="text-xl font-semibold">{todo.title}</h2>
        </div>
      )}

      <div className="flex space-x-4">
        {editTodoId === todo.id ? (
          // Edit Mode Buttons
          <>
            <button
              onClick={() => updateTodo(todo.id)}
              className="flex items-center px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition duration-200"
            >
              <AiOutlineCheck className="mr-2" />
              Save
            </button>
            <button
              onClick={() => {
                setEditTodoId(null);
                setEditTodoTitle("");
              }}
              className="flex items-center px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition duration-200"
            >
              <AiOutlineClose className="mr-2" />
              Cancel
            </button>
          </>
        ) : (
          // View Mode Buttons
          <>
            <button
              onClick={() => {
                setEditTodoId(todo.id);
                setEditTodoTitle(todo.title);
              }}
              className="flex items-center px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition duration-200"
            >
              <AiFillEdit className="mr-2" />
              Edit
            </button>
            <button
              onClick={() => deleteTodo(todo.id)}
              className="flex items-center px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-200"
            >
              <AiFillDelete className="mr-2" />
              Delete
            </button>
          </>
        )}
      </div>
    </div>
  </div>
);

export default TodoItem;
