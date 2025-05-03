import { neon } from "@neondatabase/serverless";
import { NextResponse } from "next/server";

interface Owner {
  id: number;
  email: string;
}

interface Todo {
  id: number;
  task: string;
  is_complete: boolean;
  owner: Owner;
}

export async function GET() {
  if (!process.env.DATABASE_URL) {
    return NextResponse.json({ error: "DATABASE_URL não está definida." }, { status: 500 });
  }

  const sql = neon(process.env.DATABASE_URL);

  try {
    // Correção na sintaxe da consulta SQL
    const result = await sql`
      SELECT 
        todos.id,
        todos.task,
        todos.is_complete,
        users.id as "owner_id",
        users.email as "owner_email"
      FROM todos
      LEFT JOIN neon_auth.users_sync users ON todos.owner_id = users.id
      ORDER BY todos.inserted_at ASC;
    `;

    // Transformação dos resultados
    const todos: Todo[] = result.map(row => ({
      id: Number(row.id),
      task: String(row.task),
      is_complete: Boolean(row.is_complete),
      owner: {
        id: Number(row.owner_id),
        email: String(row.owner_email)
      }
    }));

    return NextResponse.json(todos);
  } catch (error) {
    console.error("Erro ao buscar os todos:", error);
    return NextResponse.json({ error: "Erro ao carregar as tarefas." }, { status: 500 });
  }
}