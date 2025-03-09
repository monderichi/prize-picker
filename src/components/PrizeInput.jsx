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

  return (
    <div className="bg-white rounded-lg shadow-md p-6 border-2 border-pink-100">
      <h2 className="text-2xl font-bold mb-4 text-pink-600">Prizes</h2>
      <form onSubmit={addPrize} className="mb-4 flex gap-2">
        <input
          type="text"
          value={currentPrize}
          onChange={(e) => setCurrentPrize(e.target.value)}
          className="flex-1 border-2 border-pink-100 p-2 rounded-lg focus:outline-none focus:border-pink-400"
          placeholder="Enter prize"
        />
        <button 
          type="submit"
          className="bg-pink-500 text-white py-2 px-4 rounded-lg hover:bg-pink-600 
                   transition-colors duration-200 font-semibold"
        >
          Add
        </button>
      </form>
      <ul className="space-y-2">
        {prizes.map((prize, index) => (
          <li key={index} className="flex justify-between items-center p-2 bg-pink-50 rounded-lg">
            <span className="font-medium">{prize}</span>
            <button
              onClick={() => removePrize(index)}
              className="text-red-500 hover:text-red-700 font-bold text-xl w-8 h-8 rounded-full
                       hover:bg-red-100 transition-colors duration-200 flex items-center justify-center"
            >
              ×
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PrizeInput;