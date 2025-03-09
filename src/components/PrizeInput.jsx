import { useState } from 'react';

const PrizeInput = ({ prizes, setPrizes }) => {
  const [currentPrize, setCurrentPrize] = useState('');

  const addPrize = (e) => {
    e.preventDefault();
    if (currentPrize.trim()) {
      setPrizes([...prizes, currentPrize.trim()]);
      setCurrentPrize('');
    }
  };

  const removePrize = (index) => {
    setPrizes(prizes.filter((_, i) => i !== index));
  };

  // Get a vibrant light color for prizes (different palette than names)
  function getColorValue(index) {
    const lightColors = [
      '#F59E0B', // amber-500
      '#10B981', // emerald-500
      '#EC4899', // pink-500
      '#8B5CF6', // violet-500
      '#EF4444', // red-500
      '#06B6D4', // cyan-500
      '#F97316', // orange-500
      '#14B8A6', // teal-500
      '#6366F1', // indigo-500
      '#84CC16'  // lime-500
    ];
    return lightColors[index % lightColors.length];
  }

  return (
    <div className="p-6 border-2 border-yellow-500 rounded-xl bg-white shadow-md transition-all duration-300 hover:shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-yellow-600 text-center">
        Prizes
      </h2>
      <form onSubmit={addPrize} className="mb-4 flex gap-2">
        <input
          type="text"
          value={currentPrize}
          onChange={(e) => setCurrentPrize(e.target.value)}
          className="flex-1 border-2 border-yellow-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
          placeholder="Enter prize"
        />
        <button 
          type="submit"
          disabled={!currentPrize.trim()}
          className="bg-yellow-500 text-blue-900 py-2 px-4 rounded-lg hover:bg-yellow-400 
                   transition-colors duration-200 font-semibold disabled:bg-yellow-200"
        >
          Add
        </button>
      </form>
      {prizes.length > 0 ? (
        <div className="max-h-60 overflow-y-auto pr-2 custom-scrollbar">
          <ul className="space-y-2">
            {prizes.map((prize, index) => (
              <li 
                key={index} 
                className="flex justify-between items-center p-3 bg-white rounded-lg border border-yellow-200
                         hover:bg-yellow-50 transition-all duration-200"
              >
                <span 
                  className="font-medium text-lg name-color" 
                  style={{ color: getColorValue(index) }}
                >
                  {prize}
                </span>
                <button
                  onClick={() => removePrize(index)}
                  className="text-red-500 hover:text-red-700 font-bold text-xl w-8 h-8 rounded-full
                           hover:bg-red-100 transition-colors duration-200 flex items-center justify-center"
                  aria-label="Remove prize"
                >
                  ×
                </button>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className="text-center py-6 text-gray-500">No prizes added yet</div>
      )}
    </div>
  );
};

export default PrizeInput;