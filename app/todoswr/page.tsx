'use client'
import useSWR from 'swr'

type Todos = {
  userId: number
  id: number
  title: string
  completed: boolean
}

const fetcher = (url: string) => fetch(url).then(res => res.json())

export default function TodoSwr() {
  const { data, error, isLoading } = useSWR<Todos[]>(
    'https://jsonplaceholder.typicode.com/todos',
    fetcher
  )
  console.log(isLoading)
  return (
    <ul>
      {data?.map(todo => (
        <li>{todo.title}</li>
      ))}
    </ul>
  )
}
