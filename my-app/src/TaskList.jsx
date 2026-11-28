import { STATUSES, getStatus } from './statuses.js'

function TodoItem({
  text,
  details,
  status,
  onStatusChange,
  onDetailsChange,
  onDelete,
}) {
  const currentStatus = getStatus(status)
  const itemClassName = status === 'done' ? 'todo-item is-done' : 'todo-item'

  return (
    <li className={itemClassName}>
      <div className="todo-row">
        <div className="todo-main">
          <span className="todo-text">{text}</span>
          <span className={`status-badge ${currentStatus.className}`}>
            {currentStatus.label}
          </span>
        </div>

        <div className="todo-actions">
          <select
            className="status-select status-select-inline"
            aria-label="שינוי סטטוס"
            title="שינוי סטטוס"
            value={status}
            onChange={(e) => onStatusChange(e.target.value)}
          >
            {STATUSES.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>

          <button type="button" className="delete-button" onClick={onDelete}>
            מחיקה
          </button>
        </div>
      </div>

      <textarea
        className="todo-details"
        aria-label={`פירוט למשימה ${text}`}
        placeholder="הוסיפי פירוט או הסבר..."
        value={details}
        onChange={(e) => onDetailsChange(e.target.value)}
      />
    </li>
  )
}

function TaskList({ tasks, onStatusChange, onDetailsChange, onDelete }) {
  if (tasks.length === 0) {
    return (
      <div className="empty-state">
        <p>אין משימות עדיין</p>
        <p className="empty-hint">הוסיפי משימה ראשונה בטופס שמעל</p>
      </div>
    )
  }

  return (
    <ul>
      {tasks.map((task) => (
        <TodoItem
          key={task.id}
          text={task.text}
          details={task.details ?? ''}
          status={task.status}
          onStatusChange={(newStatus) => onStatusChange(task.id, newStatus)}
          onDetailsChange={(newDetails) =>
            onDetailsChange(task.id, newDetails)
          }
          onDelete={() => onDelete(task.id)}
        />
      ))}
    </ul>
  )
}

export default TaskList
