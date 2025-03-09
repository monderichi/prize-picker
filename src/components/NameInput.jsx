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

  // Get a vibrant light color based on the index
  const getLightNameColor = (index) => {
    const lightColors = [
      'text-pink-400',
      'text-blue-400',
      'text-purple-400',
      'text-green-400',
      'text-amber-500',
      'text-teal-400',
      'text-cyan-500',
      'text-rose-400',
      'text-indigo-400',
      'text-emerald-400'
    ];
    return lightColors[index % lightColors.length];
  };

  function getColorValue(index) {
    const lightColors = [
      '#F472B6', // pink-400
      '#60A5FA', // blue-400
      '#A78BFA', // purple-400
      '#4ADE80', // green-400
      '#F59E0B', // amber-500
      '#2DD4BF', // teal-400
      '#06B6D4', // cyan-500
      '#FB7185', // rose-400
      '#818CF8', // indigo-400
      '#34D399'  // emerald-400
    ];
    return lightColors[index % lightColors.length];
  }

  return (
    <div className="p-6 border-2 border-blue-700 rounded-xl bg-white shadow-md transition-all duration-300 hover:shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-blue-800 text-center">
        Names
      </h2>
      <form onSubmit={addName} className="mb-4 flex gap-2">
        <input
          type="text"
          value={currentName}
          onChange={(e) => setCurrentName(e.target.value)}
          className="flex-1 border-2 border-blue-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Enter name"
        />
        <button 
          type="submit"
          disabled={!currentName.trim()}
          className="bg-blue-800 text-white py-2 px-4 rounded-lg hover:bg-blue-700 
                   transition-colors duration-200 font-semibold disabled:bg-blue-300"
        >
          Add
        </button>
      </form>
      {names.length > 0 ? (
        <div className="max-h-60 overflow-y-auto pr-2 custom-scrollbar">
          <ul className="space-y-2">
            {names.map((name, index) => (
              <li 
                key={index} 
                className="flex justify-between items-center p-3 bg-white rounded-lg border border-blue-200
                         hover:bg-blue-50 transition-all duration-200"
              >
                <span style={{ color: getColorValue(index) }} className="font-medium text-lg">
                  {name}
                </span>
                <button
                  onClick={() => removeName(index)}
                  className="text-red-500 hover:text-red-700 font-bold text-xl w-8 h-8 rounded-full
                           hover:bg-red-100 transition-colors duration-200 flex items-center justify-center"
                  aria-label="Remove name"
                >
                  ×
                </button>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className="text-center py-6 text-gray-500">No names added yet</div>
      )}
    </div>
  );
};

export default NameInput;