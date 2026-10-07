import { useEffect, useState } from 'react'

import Header from './Header.jsx'
import StatsBar from './StatsBar.jsx'
import TaskList from './TaskList.jsx'

import { STATUSES, DONE_STATUS } from './statuses.js'

function App() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks')
    if (!savedTasks) {
      return [
        { id: 1, text: 'פריט לדוגמה 1', status: 'todo' },
        { id: 2, text: 'פריט לדוגמה 2', status: 'done' },
      ]
    }

    try {
      const parsedTasks = JSON.parse(savedTasks)
      return Array.isArray(parsedTasks) ? parsedTasks : []
    } catch {
      return []
    }
  })

  const [inputValue, setInputValue] = useState('')

  const [newTaskStatus, setNewTaskStatus] = useState(STATUSES[0].value)

  const [userName, setUserName] = useState(
    () => localStorage.getItem('userName') ?? '',
  )

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  useEffect(() => {
    localStorage.setItem('userName', userName)
  }, [userName])

  const total = tasks.length
  const completed = tasks.filter((task) => task.status === DONE_STATUS).length
  const remaining = total - completed

  function handleAdd() {
    if (inputValue.trim() === '') return

    const newTask = {
      id: Date.now(),
      text: inputValue,
      status: newTaskStatus,
    }

    setTasks([...tasks, newTask])
    setInputValue('')
  }

  function handleDelete(id) {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  function handleStatusChange(id, newStatus) {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, status: newStatus } : task,
      ),
    )
  }

  return (
    <>
      <Header
        userName={userName}
        taskCount={total}
        onUserNameChange={setUserName}
      />

      <StatsBar total={total} completed={completed} remaining={remaining} />

      <div className="task-form">
        <input
          type="text"
          placeholder="מה צריך לעשות?"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <select
          className="status-select"
          value={newTaskStatus}
          onChange={(e) => setNewTaskStatus(e.target.value)}
        >
          {STATUSES.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <button type="button" onClick={handleAdd}>
          הוסף משימה
        </button>
      </div>

      <TaskList
        tasks={tasks}
        onStatusChange={handleStatusChange}
        onDelete={handleDelete}
      />
    </>
  )
}

export default App
