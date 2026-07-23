import { useState, useEffect } from 'react'
import WorkoutList from '../components/WorkoutList'
import './Dashboard.css'

function Dashboard() {
  const [workouts, setWorkouts] = useState([])
  const [stats, setStats] = useState({
    totalWorkouts: 0,
    totalExercises: 0,
    totalVolume: 0
  })

  useEffect(() => {
    // Load workouts from localStorage
    const savedWorkouts = localStorage.getItem('workouts')
    if (savedWorkouts) {
      const parsedWorkouts = JSON.parse(savedWorkouts)
      setWorkouts(parsedWorkouts)
      calculateStats(parsedWorkouts)
    }
  }, [])

  const calculateStats = (workoutList) => {
    const totalWorkouts = workoutList.length
    const uniqueExercises = new Set(workoutList.map(w => w.exerciseName)).size
    const totalVolume = workoutList.reduce((sum, w) => {
      const sets = parseInt(w.sets) || 0
      const reps = parseInt(w.reps) || 0
      const weight = parseInt(w.weight) || 0
      return sum + (sets * reps * weight)
    }, 0)

    setStats({
      totalWorkouts,
      totalExercises: uniqueExercises,
      totalVolume: totalVolume.toLocaleString()
    })
  }

  const handleDelete = (id) => {
    const updatedWorkouts = workouts.filter(w => w.id !== id)
    setWorkouts(updatedWorkouts)
    localStorage.setItem('workouts', JSON.stringify(updatedWorkouts))
    calculateStats(updatedWorkouts)
  }

  const handleClearAll = () => {
    if (window.confirm('Are you sure you want to delete all workouts? This cannot be undone.')) {
      setWorkouts([])
      localStorage.removeItem('workouts')
      setStats({ totalWorkouts: 0, totalExercises: 0, totalVolume: 0 })
    }
  }

  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-number">{stats.totalWorkouts}</div>
          <div className="stat-label">Total Workouts</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">{stats.totalExercises}</div>
          <div className="stat-label">Unique Exercises</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">{stats.totalVolume}</div>
          <div className="stat-label">Total Volume (lbs)</div>
        </div>
      </div>

      <div className="workouts-section">
        <div className="section-header">
          <h3>Recent Workouts</h3>
          {workouts.length > 0 && (
            <button className="btn-clear" onClick={handleClearAll}>
              Clear All
            </button>
          )}
        </div>
        <WorkoutList workouts={workouts} onDelete={handleDelete} />
      </div>
    </div>
  )
}

export default Dashboard
