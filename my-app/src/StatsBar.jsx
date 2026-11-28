function StatsBar({ total, completed, remaining }) {
  const percent = total === 0 ? 0 : Math.round((completed / total) * 100)

  return (
    <section className="stats-bar">
      <div className="stat">
        <span className="stat-value">{total}</span>
        <span className="stat-label">סה&quot;כ משימות</span>
      </div>

      <div className="stat">
        <span className="stat-value stat-value-done">{completed}</span>
        <span className="stat-label">הושלמו</span>
      </div>

      <div className="stat">
        <span className="stat-value stat-value-remaining">{remaining}</span>
        <span className="stat-label">נשארו</span>
      </div>

      <div className="progress">
        <div className="progress-track">
          <div className="progress-fill" style={{ width: `${percent}%` }} />
        </div>
        <span className="progress-text">{percent}% הושלמו</span>
      </div>
    </section>
  )
}

export default StatsBar
