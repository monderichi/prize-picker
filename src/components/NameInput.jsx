import { useState } from 'react';

const NameInput = ({ names, setNames }) => {
  const [currentName, setCurrentName] = useState('');

  const addName = (e) => {
    e.preventDefault();
    if (currentName.trim()) {
      setNames([...names, currentName.trim()]);
      setCurrentName('');
    }
  };

  const removeName = (index) => {
    setNames(names.filter((_, i) => i !== index));
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 border-2 border-purple-100">
      <h2 className="text-2xl font-bold mb-4 text-purple-600">Names</h2>
      <form onSubmit={addName} className="mb-4 flex gap-2">
        <input
          type="text"
          value={currentName}
          onChange={(e) => setCurrentName(e.target.value)}
          className="flex-1 border-2 border-purple-100 p-2 rounded-lg focus:outline-none focus:border-purple-400"
          placeholder="Enter name"
        />
        <button 
          type="submit"
          className="bg-purple-500 text-white py-2 px-4 rounded-lg hover:bg-purple-600 
                   transition-colors duration-200 font-semibold"
        >
          Add
        </button>
      </form>
      <ul className="space-y-2">
        {names.map((name, index) => (
          <li key={index} className="flex justify-between items-center p-2 bg-purple-50 rounded-lg">
            <span className="font-medium">{name}</span>
            <button
              onClick={() => removeName(index)}
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

export default NameInput;