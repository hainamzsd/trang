export default function VietnamFlagSVG() {
    return (
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Top left flag */}
        <div className="absolute top-10 left-10 opacity-20 rotate-12">
          <svg width="120" height="80" viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="120" height="80" fill="#E60019" />
            <path
              d="M60 16L65.8779 34.1221H84.8532L69.4876 45.2558L75.3655 63.3779L60 52.2442L44.6345 63.3779L50.5124 45.2558L35.1468 34.1221H54.1221L60 16Z"
              fill="#FFFF00"
            />
          </svg>
        </div>
  
        {/* Bottom right flag */}
        <div className="absolute bottom-10 right-10 opacity-20 -rotate-12">
          <svg width="120" height="80" viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="120" height="80" fill="#E60019" />
            <path
              d="M60 16L65.8779 34.1221H84.8532L69.4876 45.2558L75.3655 63.3779L60 52.2442L44.6345 63.3779L50.5124 45.2558L35.1468 34.1221H54.1221L60 16Z"
              fill="#FFFF00"
            />
          </svg>
        </div>
  
        {/* Center star */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-10">
          <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M50 10L58.7785 36.2215H86.6025L64.9119 52.5569L73.6904 78.7785L50 62.4431L26.3096 78.7785L35.0881 52.5569L13.3975 36.2215H41.2215L50 10Z"
              fill="#FFFF00"
              stroke="#E60019"
              strokeWidth="2"
            />
          </svg>
        </div>
  
        {/* Additional stars */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute opacity-15"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              transform: `rotate(${Math.random() * 360}deg) scale(${0.3 + Math.random() * 0.7})`,
            }}
          >
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M20 4L23.5 14.5H34.5L25.5 21L29 31.5L20 25L11 31.5L14.5 21L5.5 14.5H16.5L20 4Z"
                fill="#FFFF00"
                stroke="#E60019"
                strokeWidth="1"
              />
            </svg>
          </div>
        ))}
      </div>
    )
  }
  