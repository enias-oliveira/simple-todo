import React from 'react'
import PropTypes from 'prop-types'

import { FaTrashAlt } from 'react-icons/fa'

import './styles.css'

const Task = ({ task, onCheckboxClick, onDeleteClick }) => {
  return (
    <li className="task">
      <input
        className="checkbox"
        type="checkbox"
        checked={!!task.isChecked}
        onClick={() => onCheckboxClick(task)}
        readOnly
      />
      <label>{task.text}</label>
      <button onClick={() => onDeleteClick(task)}>
        <FaTrashAlt />
      </button>
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
  onDeleteClick: PropTypes.func,
}

export default Task
