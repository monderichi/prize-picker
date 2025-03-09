import { useState } from 'react';
import PrizePicker from "./components/PrizePicker";

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
    // Implementation here
  }
};

function App() {
  return (
    <div className="min-h-screen w-full flex justify-center items-center p-4 bg-gray-800">
      <div className="container h-screen flex justify-center items-center pl-32 sm:pl-0">
        <PrizePicker />
      </div>
    </div>
  );
}

export default App;