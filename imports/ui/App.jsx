import React from 'react'

import { useTracker } from 'meteor/react-meteor-data'

import { TasksCollection } from '/imports/api/collections/tasks-collection.js'

import Task from './components/Task'
import TaskForm from './components/TaskForm'

export const App = () => {
  const tasks = useTracker(() => TasksCollection.find({}).fetch())
  return (
    <div>
      <h1>Hello Meteor</h1>
      <ul>
        {tasks.map((task) => (
          <Task key={task._id} task={task} />
        ))}
      </ul>
      <TaskForm />
    </div>
  )
}
