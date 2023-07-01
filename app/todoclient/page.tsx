'use client'

import { useEffect, useState } from 'react'

type Todos = {
  userId: number
  id: number
  title: string
  completed: boolean
}

export default function TodoClient() {
  const [todos, setTodos] = useState<Todos[]>([])

  useEffect(() => {
    async function getTodo() {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos')
      const data: Todos[] = await response.json()

      if (!response.ok) {
        throw new Error('Não foi possivel pegar o todos')
      }

      setTodos(data)
    }

    getTodo()
  }, [])

  return (
    <div>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  )
}
