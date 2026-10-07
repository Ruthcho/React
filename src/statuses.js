export const STATUSES = [
  { value: 'todo', label: 'ממתין לביצוע', className: 'status-todo' },
  { value: 'in-progress', label: 'בתהליך', className: 'status-progress' },
  { value: 'done', label: 'הושלם', className: 'status-done' },
]

export function getStatus(statusValue) {
  return STATUSES.find((status) => status.value === statusValue) ?? STATUSES[0]
}

export const DONE_STATUS = 'done'
ע