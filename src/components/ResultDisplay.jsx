const ResultDisplay = ({ matches }) => {
  if (matches.length === 0) return null;

  return (
    <div className="w-full bg-white rounded-lg shadow-md p-8 border-2 border-gray-100">
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Results 🎉</h2>
      <div className="flex justify-center">
        <ul className="space-y-4 w-full max-w-3xl">
          {matches.map((match, index) => (
            <li key={index} 
                className="p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg 
                         flex items-center justify-center space-x-4">
              <span className="font-semibold text-purple-700 text-xl">{match.name}</span>
              <span className="text-gray-400 text-xl">→</span>
              <span className="font-semibold text-pink-700 text-xl">{match.prize}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ResultDisplay;