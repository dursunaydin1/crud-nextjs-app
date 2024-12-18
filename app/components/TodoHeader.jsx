const TodoHeader = () => (
  <header className="text-center mb-8">
    <span className="text-3xl font-extrabold uppercase">Todo List App</span>
    <h1 className="text-2xl font-extrabold uppercase mb-5">
      Next.js
      <span className="text-blue-600 ml-2">with Prisma and MongoDB</span>
    </h1>
    <p className="text-sm font-medium max-w-3xl mx-auto">
      Welcome to the Todo List App! Here, you can add, update, and delete tasks
      easily. Powered by Next.js, Prisma, and MongoDB.
    </p>
  </header>
);

export default TodoHeader;
