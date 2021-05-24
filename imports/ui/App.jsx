import React from 'react'

import { useTracker } from 'meteor/react-meteor-data'

import './globalStyles.css'

import { TasksCollection } from '/imports/api/collections/tasks-collection.js'

import Task from './components/Task'
import TaskForm from './components/TaskForm'

const toggleChecked = ({ _id, isChecked }) => {
  TasksCollection.update(_id, {
    $set: {
      isChecked: !isChecked,
    },
  })
}

const deleteTask = ({ _id }) => TasksCollection.remove(_id)

export const App = () => {
  const tasks = useTracker(() => TasksCollection.find({}, { sort: { createdAt: -1 } }).fetch())
  return (
    <div className="app">
      <div className="app-header">
        <h1>Meteor Todo</h1>
      </div>
      <main>
        <TaskForm />
        <ul>
          {tasks.map((task) => (
            <Task
              key={task._id}
              task={task}
              onCheckboxClick={toggleChecked}
              onDeleteClick={deleteTask}
            />
          ))}
        </ul>
      </main>
    </div>
  )
}
