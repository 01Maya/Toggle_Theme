import { Sun, Moon } from 'lucide-react'
import SparklingStars from './SparklingStars'

interface ToggleButtonProps {
  darkMode: boolean
  setDarkMode: (darkMode: boolean) => void
}

export default function ToggleButton({ darkMode, setDarkMode }: ToggleButtonProps) {
  return (
    <>
      <SparklingStars />
      <button
        onClick={() => setDarkMode(!darkMode)}
        className={`
          relative w-20 h-10 rounded-full transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-400
          mx-auto block shadow-md hover:shadow-lg hover:scale-105 cursor-pointer
          ${darkMode ? 'bg-blue-700' : 'bg-yellow-400'}
        `}
      >
        <div
          className={`
            absolute top-1 left-1 w-8 h-8 rounded-full transition-all duration-300 ease-in-out
            flex items-center justify-center shadow-sm
            ${darkMode ? 'translate-x-10 bg-gray-900' : 'translate-x-0 bg-white'}
          `}
        >
          {darkMode ? <Moon className="w-5 h-5 text-yellow-300" /> : <Sun className="w-5 h-5 text-yellow-500" />}
        </div>
      </button>
    </>
  )
}

