import React from 'react'
import PropTypes from 'prop-types'

const Task = ({ task, onCheckboxClick, onDeleteClick }) => {
  return (
    <li>
      <input
        type="checkbox"
        checked={!!task.isChecked}
        onClick={() => onCheckboxClick(task)}
        readOnly
      />
      <span>{task.text}</span>
      <button onClick={() => onDeleteClick(task)}>&times;</button>
    </li>
  )
}

Task.propTypes = {
  task: PropTypes.shape({
    _id: PropTypes.number,
    text: PropTypes.string,
    isChecked: PropTypes.bool,
  }),
  onCheckboxClick: PropTypes.func,
}

export default Task
