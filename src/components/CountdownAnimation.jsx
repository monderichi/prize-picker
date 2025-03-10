import { useState, useEffect } from 'react';

const CountdownAnimation = ({ initialCount = 10, onComplete }) => {
  const [count, setCount] = useState(initialCount);
  
  // Circle values
  const radius = 70;
  const circumference = 2 * Math.PI * radius;
  
  // Calculate the dash offset based on remaining time
  const dashOffset = circumference * (1 - count / initialCount);
  
  // Countdown timer
  useEffect(() => {
    if (count <= 0) {
      onComplete();
      return;
    }
    
    const timer = setTimeout(() => {
      setCount((prevCount) => prevCount - 1);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, [count, onComplete]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-blue-900 z-50">
      <div className="text-center">
        <div className="relative">
          {/* Circular countdown timer */}
          <svg className="w-64 h-64" viewBox="0 0 200 200">
            {/* Background circle */}
            <circle 
              cx="100" 
              cy="100" 
              r={radius}
              fill="none"
              stroke="#1a1a1a"
              strokeWidth="8"
            />
            
            {/* Countdown progress circle */}
            <circle 
              cx="100" 
              cy="100" 
              r={radius}
              fill="none"
              stroke="#ffffff"
              strokeWidth="8"
              strokeDasharray={circumference}
              strokeDashoffset={dashOffset}
              strokeLinecap="round"
              transform="rotate(-90 100 100)"
              style={{ transition: "stroke-dashoffset 1s linear" }}
            />
            
            {/* Countdown number - changed fill to red */}
            <text 
              x="100" 
              y="120" 
              textAnchor="middle" 
              fontSize="72"
              fontWeight="bold"
              fill="#ff0000"
            >
              {count}
            </text>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default CountdownAnimation;