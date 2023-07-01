type Todos = {
  userId: number
  id: number
  title: string
  completed: boolean
}

async function getTodo() {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos')
  if (!response.ok) {
    throw new Error('Não foi possivle pegar o todos')
  }

  const data: Todos[] = await response.json()
  return data
}

export default async function TodoServer() {
  const todos = await getTodo()

  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  )
}
