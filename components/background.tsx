interface BackgroundProps {
  darkMode: boolean
}

export default function Background({ darkMode }: BackgroundProps) {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="doodle" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
            <path d="M20 20 L25 5 L30 20 L45 25 L30 30 L25 45 L20 30 L5 25 Z" className={`${darkMode ? 'fill-yellow-300' : 'fill-yellow-500'} opacity-20`} />
            <path d="M100 40 Q110 30 120 40 T140 40 Q150 30 160 40 Q170 50 160 60 H100 Q90 50 100 40" className={`${darkMode ? 'fill-blue-300' : 'fill-blue-500'} opacity-20`} />
            <path d="M160 160 Q180 140 200 160" className="stroke-red-500 opacity-20" fill="none" strokeWidth="4" />
            <path d="M165 165 Q180 150 195 165" className="stroke-yellow-500 opacity-20" fill="none" strokeWidth="4" />
            <path d="M170 170 Q180 160 190 170" className="stroke-green-500 opacity-20" fill="none" strokeWidth="4" />
            <path d="M80 140 Q90 120 100 140 Q100 150 90 150 Q80 150 80 140" className={`${darkMode ? 'fill-blue-300' : 'fill-blue-500'} opacity-20`} />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#doodle)" />
      </svg>
    </div>
  )
}

