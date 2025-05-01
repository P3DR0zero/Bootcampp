import { neon } from "@neondatabase/serverless";
import 'dotenv/config'; // Certifique-se de carregar as variáveis de ambiente

export async function TodosList() {
  if (!process.env.DATABASE_URL) {
    throw new Error("A variável de ambiente DATABASE_URL não está definida.");
  }

  const sql = neon(process.env.DATABASE_URL);

  try {
    // Obter os todos com o proprietário
    const todosWithOwner = await sql<any[]>(`
      SELECT 
        todos.id,
        todos.task,
        todos.is_complete,
        users.id as "owner.id",
        users.email as "owner.email"
      FROM todos
      LEFT JOIN neon_auth.users_sync users ON todos.owner_id = users.id
      ORDER BY todos.inserted_at ASC;
    `);

    return (
      <ul>
        {todosWithOwner.map((todo) => (
          <li key={todo.id}>
            <span>{todo.task}</span>
            <span>{todo["owner.email"] || "Sem proprietário"}</span>
          </li>
        ))}
      </ul>
    );
  } catch (error) {
    console.error("Erro ao buscar os todos:", error);
    return <p>Erro ao carregar a lista de tarefas.</p>;
  }
}