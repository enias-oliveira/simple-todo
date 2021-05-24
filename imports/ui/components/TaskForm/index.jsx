import React, { useState } from 'react'

import { TasksCollection } from '/imports/api/collections/tasks-collection.js'

import './styles.css'

const TaskForm = () => {
  const [text, setText] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    if (text) {
      TasksCollection.insert({
        text: text.trim(),
        createdAt: new Date(),
      })

      setText('')
    }
  }

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        className="task-form-input"
        value={text}
        onChange={(e) => setText(e.target.value)}
        type="text"
        placeholder="Insert New Task"
      />
      <button type="submit">Add Task</button>
    </form>
  )
}

export default TaskForm
