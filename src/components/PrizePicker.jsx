import { useState, useEffect } from 'react';
import NameInput from "./NameInput";
import PrizeInput from "./PrizeInput";
import ResultDisplay from "./ResultDisplay";
import CountdownAnimation from "./CountdownAnimation";

const PrizePicker = () => {
  const [names, setNames] = useState([]);
  const [prizes, setPrizes] = useState([]);
  const [matches, setMatches] = useState([]);
  const [isAssigned, setIsAssigned] = useState(false);
  // State for showing countdown
  const [showCountdown, setShowCountdown] = useState(false);

  const assignPrizes = () => {
    if (names.length === 0 || prizes.length === 0) return;
    
    // Start the countdown animation
    setShowCountdown(true);
  };

  const handleCountdownComplete = () => {
    // Hide countdown and finish assignment
    setShowCountdown(false);
    finishAssignment();
  };

  const finishAssignment = () => {
    // Create copies of arrays to avoid modifying the originals
    const shuffledNames = [...names];
    const shuffledPrizes = [...prizes];
    
    // Fisher-Yates shuffle for better randomization
    const shuffle = (array) => {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Swap elements
      }
      return array;
    };
    
    // Shuffle both arrays for maximum randomness
    shuffle(shuffledNames);
    shuffle(shuffledPrizes);
    
    // Create matches with shuffled arrays
    const results = shuffledNames.map((name, index) => {
      if (index >= shuffledPrizes.length) return null;
      return {
        name,
        prize: shuffledPrizes[index]
      };
    }).filter(result => result !== null);
    
    setMatches(results);
    setIsAssigned(true);
  };

  const resetPicker = () => {
    setIsAssigned(false);
    setMatches([]);
  };

  return (
    <>
      {/* Show the dedicated countdown animation when needed */}
      {showCountdown && (
        <CountdownAnimation initialCount={10} onComplete={handleCountdownComplete} />
      )}
    
      {/* Main content */}
      <div className="w-full max-w-3xl bg-white bg-opacity-90 backdrop-blur-md rounded-xl shadow-2xl p-8 ml-16 sm:ml-0 text-center border-2 border-blue-100">
        <div className="flex flex-col items-center mb-10">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-sky-400 rounded-full blur opacity-70"></div>
            <div className="relative">
              <img 
                src="/logo-nde.png" 
                alt="NDE Logo" 
                className="h-16 mb-4 drop-shadow-lg"
              />
            </div>
          </div>
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-sky-600 mt-4">
            Κόπη Πίτας Σύλλογου
          </h1>
        </div>
      
        {!isAssigned ? (
          <div className="flex flex-col items-center w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10 w-full">
              <NameInput names={names} setNames={setNames} />
              <PrizeInput prizes={prizes} setPrizes={setPrizes} />
            </div>
            <div className="w-full max-w-md mx-auto">
              <button 
                onClick={assignPrizes}
                disabled={names.length === 0 || prizes.length === 0}
                className="w-full bg-gradient-to-r from-blue-600 to-sky-500 text-white py-4 px-6 rounded-lg 
                         font-semibold text-lg shadow-lg hover:from-blue-700 hover:to-sky-600 
                         transform transition-all duration-300 hover:scale-105 hover:shadow-xl
                         disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none disabled:hover:scale-100"
              >
                <span className="flex items-center justify-center gap-2">
                  <span className="animate-pulse">✨</span> 
                  Assign Prizes 
                  <span className="animate-pulse">✨</span>
                </span>
              </button>
            </div>
          </div>
        ) : (
          <div className="w-full flex flex-col items-center">
            <ResultDisplay matches={matches} />
            <div className="w-full max-w-md mt-10">
              <button 
                onClick={resetPicker}
                className="w-full bg-gradient-to-r from-blue-600 to-sky-500 text-white py-4 px-8 rounded-lg 
                        font-semibold text-xl shadow-lg hover:from-blue-700 hover:to-sky-600
                        transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                <span className="flex items-center justify-center gap-2">
                  <span>↺</span> Start New Assignment
                </span>
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default PrizePicker;
