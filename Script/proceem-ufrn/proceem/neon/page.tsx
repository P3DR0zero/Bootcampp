import { AddTodoForm } from "app/add-todo-form";
import { Header } from "app/header";
import { TodoList } from "app/todos-list";
import { stackServerApp } from "app/stack";

export default async function Home() {
  const user = await stackServerApp.getUser();

  if (!user) {
    return <Header />;
  }

  return (
    <div>
      <Header />
      <main>
        <AddTodoForm />
        <TodoList />
      </main>
    </div>
  );
}