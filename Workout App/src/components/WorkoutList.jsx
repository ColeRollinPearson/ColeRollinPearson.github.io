import './WorkoutList.css'

function WorkoutList({ workouts, onDelete }) {
  if (workouts.length === 0) {
    return (
      <div className="empty-state">
        <p>📋 No workouts logged yet. Start by logging your first exercise!</p>
      </div>
    )
  }

  return (
    <div className="workout-list">
      {workouts.map((workout, index) => (
        <div key={workout.id} className="workout-card">
          <div className="workout-header">
            <h3>{workout.exerciseName}</h3>
            <span className="workout-date">{workout.date} at {workout.time}</span>
          </div>
          <div className="workout-details">
            {workout.sets && (
              <div className="detail-item">
                <span className="detail-label">Sets:</span>
                <span className="detail-value">{workout.sets}</span>
              </div>
            )}
            {workout.reps && (
              <div className="detail-item">
                <span className="detail-label">Reps:</span>
                <span className="detail-value">{workout.reps}</span>
              </div>
            )}
            {workout.weight && (
              <div className="detail-item">
                <span className="detail-label">Weight:</span>
                <span className="detail-value">{workout.weight} lbs</span>
              </div>
            )}
          </div>
          {workout.notes && (
            <div className="workout-notes">
              <strong>Notes:</strong> {workout.notes}
            </div>
          )}
          <button 
            className="btn-delete" 
            onClick={() => onDelete(workout.id)}
            title="Delete this workout"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  )
}

export default WorkoutList
