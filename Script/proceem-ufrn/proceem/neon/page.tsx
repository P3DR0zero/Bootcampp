import { AddTodoForm } from "../neon/todo-add-form";
import { TodosList } from "../neon/todos-list";
import { stackServerApp } from "../stack";

export default async function Home() {
  const user = await stackServerApp.getUser();

  if (!user) {
    return null; // Removido o componente Header, pois não está definido
  }

  return (
    <div>
      <main>
        <AddTodoForm />
        <TodosList />
      </main>
    </div>
  );
}