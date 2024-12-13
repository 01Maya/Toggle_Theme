'use client'

import { useState, useEffect } from 'react'
import Background from './background'
import ToggleButton from './toggle-button'

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  return (
    <div className={`min-h-screen w-full transition-colors duration-500 ${darkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
      <Background darkMode={darkMode} />
      <div className="container mx-auto px-4 py-8 flex flex-col items-center justify-center min-h-screen">
        <h1 className={`text-4xl font-bold mb-8 text-center ${darkMode ? 'text-white' : 'text-gray-900'}`}>
          Theme Toggle Demo
        </h1>
        <ToggleButton darkMode={darkMode} setDarkMode={setDarkMode} />
      </div>
    </div>
  )
}

