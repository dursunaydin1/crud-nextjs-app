import TodoItem from "./TodoItem";

const TodoList = ({
  todos,
  editTodoId,
  editTodoTitle,
  setEditTodoId,
  setEditTodoTitle,
  updateTodo,
  deleteTodo,
  loading,
}) => (
  <div className="flex flex-col gap-5 items-center justify-center mt-10 w-full sm:w-[600px]">
    {loading ? (
      <p className="text-center text-gray-500">Loading...</p>
    ) : todos.length === 0 ? (
      <p className="text-red-500 text-center text-lg font-bold">
        No tasks available
      </p>
    ) : (
      todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          editTodoId={editTodoId}
          editTodoTitle={editTodoTitle}
          setEditTodoId={setEditTodoId}
          setEditTodoTitle={setEditTodoTitle}
          updateTodo={updateTodo}
          deleteTodo={deleteTodo}
        />
      ))
    )}
  </div>
);

export default TodoList;
