# 💪 Workout Tracker App

A simple web application to track your workout exercises, built with React and Vite.

## Features

- **Log Exercises**: Record exercise name, sets, reps, weight, and notes
- **Dashboard**: View all logged workouts with statistics
- **LocalStorage**: All data is saved locally in your browser (no account needed)
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Delete Workouts**: Remove individual workouts or clear all data

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

## Project Structure

```
src/
├── components/
│   ├── ExerciseForm.jsx      # Form for logging exercises
│   ├── ExerciseForm.css
│   ├── Header.jsx            # Navigation header
│   ├── Header.css
│   ├── WorkoutList.jsx       # Display logged workouts
│   └── WorkoutList.css
├── pages/
│   ├── Dashboard.jsx         # Main dashboard view
│   ├── Dashboard.css
│   ├── LogExercise.jsx       # Exercise logging page
│   └── LogExercise.css
├── App.jsx                   # Main app component with routing
├── App.css
├── main.jsx                  # React entry point
├── index.css                 # Global styles
└── package.json              # Project dependencies
```

## Usage

1. **Log an Exercise**: Click "Log Exercise" in the navigation, fill out the form, and submit
2. **View Dashboard**: Click "Dashboard" to see all your logged workouts and statistics
3. **Delete Workouts**: Click the "Delete" button on individual workout cards or "Clear All" to reset

## Technologies Used

- **React** - UI library
- **React Router** - Client-side routing
- **Vite** - Build tool and dev server
- **CSS3** - Styling (no external UI framework)

## Building for Production

To create a production build:

```bash
npm run build
```

The optimized files will be in the `dist` folder.

## Data Storage

All workouts are saved to your browser's LocalStorage under the key `workouts`. If you clear your browser data, your workouts will be deleted.

## Future Enhancements

- Export/import workout data
- Workout categories and filters
- Progress charts and graphs
- Goal setting and tracking
- Backend integration for cloud sync
