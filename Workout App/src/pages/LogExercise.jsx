import { useState, useEffect } from 'react'
import ExerciseForm from '../components/ExerciseForm'
import './LogExercise.css'

function LogExercise() {
  const handleSubmit = (workoutData) => {
    // Get existing workouts from localStorage
    const savedWorkouts = localStorage.getItem('workouts')
    const workouts = savedWorkouts ? JSON.parse(savedWorkouts) : []
    
    // Add new workout
    workouts.unshift(workoutData)
    
    // Save back to localStorage
    localStorage.setItem('workouts', JSON.stringify(workouts))
    
    // Show success message
    alert(`✅ ${workoutData.exerciseName} logged successfully!`)
  }

  return (
    <div className="log-exercise">
      <h2>Log a New Exercise</h2>
      <p className="intro-text">
        Track your workout progress by logging your exercises. All data is saved locally on your device.
      </p>
      <ExerciseForm onSubmit={handleSubmit} />
    </div>
  )
}

export default LogExercise
