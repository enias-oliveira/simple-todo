import React from 'react'
import PropTypes from 'prop-types'

const Task = ({ task }) => {
  return <li>{task.text}</li>
}

Task.propTypes = {
  task: PropTypes.shape({
    _id: PropTypes.number,
    text: PropTypes.string,
  }),
}

export default Task
