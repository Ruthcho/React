function Header({ userName, taskCount, onUserNameChange }) {
  return (
    <header className="app-header">
      <h1>רשימת המשימות שלי</h1>

      <div className="user-row">
        <label className="user-label" htmlFor="user-name">
          שמך:
        </label>
        <input
          id="user-name"
          type="text"
          className="user-input"
          placeholder="הקלידי שם"
          value={userName}
          onChange={(e) => onUserNameChange(e.target.value)}
        />
      </div>

      <p className="app-subtitle">
        {userName.trim() === '' ? 'שלום' : `שלום, ${userName}`}
        {taskCount > 0
          ? ` — יש לך ${taskCount} משימות ברשימה`
          : ' — הרשימה שלך ריקה'}
      </p>
    </header>
  )
}

export default Header
