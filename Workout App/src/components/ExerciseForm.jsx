import { useState } from 'react'
import './ExerciseForm.css'

function ExerciseForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    exerciseName: '',
    sets: '',
    reps: '',
    weight: '',
    notes: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (!formData.exerciseName.trim()) {
      alert('Please enter an exercise name')
      return
    }

    const workoutData = {
      ...formData,
      id: Date.now(),
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }

    onSubmit(workoutData)
    
    setFormData({
      exerciseName: '',
      sets: '',
      reps: '',
      weight: '',
      notes: ''
    })
  }

  return (
    <form className="exercise-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="exerciseName">Exercise Name *</label>
        <input
          type="text"
          id="exerciseName"
          name="exerciseName"
          value={formData.exerciseName}
          onChange={handleChange}
          placeholder="e.g., Bench Press, Squats, Deadlift"
          required
        />
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="sets">Sets</label>
          <input
            type="number"
            id="sets"
            name="sets"
            value={formData.sets}
            onChange={handleChange}
            placeholder="e.g., 3"
            min="0"
          />
        </div>

        <div className="form-group">
          <label htmlFor="reps">Reps</label>
          <input
            type="number"
            id="reps"
            name="reps"
            value={formData.reps}
            onChange={handleChange}
            placeholder="e.g., 10"
            min="0"
          />
        </div>

        <div className="form-group">
          <label htmlFor="weight">Weight (lbs)</label>
          <input
            type="number"
            id="weight"
            name="weight"
            value={formData.weight}
            onChange={handleChange}
            placeholder="e.g., 225"
            min="0"
            step="0.5"
          />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="notes">Notes</label>
        <textarea
          id="notes"
          name="notes"
          value={formData.notes}
          onChange={handleChange}
          placeholder="Add any notes about this exercise..."
          rows="3"
        />
      </div>

      <button type="submit" className="btn-submit">Log Exercise</button>
    </form>
  )
}

export default ExerciseForm
