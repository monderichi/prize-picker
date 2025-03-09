import { useState } from 'react';
import NameInput from './NameInput';
import PrizeInput from './PrizeInput';
import ResultDisplay from './ResultDisplay';

const PrizePicker = () => {
  const [names, setNames] = useState([]);
  const [prizes, setPrizes] = useState([]);
  const [matches, setMatches] = useState([]);
  const [isAssigned, setIsAssigned] = useState(false);

  const assignPrizes = () => {
    if (names.length === 0 || prizes.length === 0) return;
    
    // Copy and shuffle the prizes array
    let availablePrizes = [...prizes].sort(() => Math.random() - 0.5);

    // For each name, assign one unique prize (if available)
    const results = names.map((name, index) => {
      if (index >= availablePrizes.length) return null;
      return {
        name,
        prize: availablePrizes[index]
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
    <div className="w-full max-w-3xl bg-white rounded-xl shadow-2xl p-8 ml-16 text-center">
      <div className="flex flex-col items-center mb-6">
        <img 
          src="/logo-nde.png" 
          alt="NDE Logo" 
          className="h-10 mb-4"
        />
        <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
          Κόπη Πίτας Σύλλογου 2025
        </h1>
      </div>
      
      {!isAssigned ? (
        <div className="flex flex-col items-center w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6 w-full">
            <NameInput names={names} setNames={setNames} />
            <PrizeInput prizes={prizes} setPrizes={setPrizes} />
          </div>
          <div className="w-full max-w-md mx-auto">
            <button 
              onClick={assignPrizes}
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 px-6 rounded-lg 
                         font-semibold text-lg shadow-lg hover:from-purple-700 hover:to-pink-700 
                         transform transition-all duration-200 hover:scale-105"
            >
              ✨ Assign Prizes ✨
            </button>
          </div>
        </div>
      ) : (
        <div className="w-full flex flex-col items-center">
          <ResultDisplay matches={matches} />
          <div className="w-full max-w-md mt-8">
            <button 
              onClick={resetPicker}
              className="w-full bg-gradient-to-r from-gray-600 to-gray-500 text-white py-4 px-8 rounded-lg 
                         font-semibold text-xl shadow-lg hover:from-gray-700 hover:to-gray-600 
                         transform transition-all duration-200 hover:scale-105"
            >
              ↺ Start New Assignment
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PrizePicker;
