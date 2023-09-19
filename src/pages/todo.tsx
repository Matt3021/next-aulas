import { Todo } from "@/types/Todo"
import { useEffect, useState } from "react"

const ToDo = () => {
  const [todoList, setTodoList] = useState<Todo[]>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    loadTodos()
  }, [])

  const loadTodos = async () => {
    setLoading(true)
    const res = await fetch('https://jsonplaceholder.typicode.com/todos')
    const list: Todo[] = await res.json()
    setTodoList(list)
    setLoading(false)
  }

  return (
    <div>
      <h1 className="text-3xl font-bold">Lista de Tarefas</h1>
      {loading && <div>Carregando... </div>}
      {todoList.map((todoItem, index) => (
        <li key={index}>{todoItem.title} - {todoItem.completed.toString()}</li>
      ))}
    </div>
  )
}

export default ToDo
