const ResultDisplay = ({ matches }) => {
  if (matches.length === 0) return null;

  // Name colors
  function getNameColorValue(index) {
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

  // Prize colors - using a different set for visual distinction
  function getPrizeColorValue(index) {
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

  const exportToTextFile = () => {
    // Create formatted content for the text file
    const fileContent = [
      "Prize Assignment Results",
      "======================",
      "",
      ...matches.map(match => `${match.name} → ${match.prize}`),
      "",
      `Generated on: ${new Date().toLocaleString()}`
    ].join('\n');

    // Create a blob with the content
    const blob = new Blob([fileContent], { type: 'text/plain' });
    
    // Create a download link and trigger the download
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.download = `prize-results-${Date.now()}.txt`;
    link.href = url;
    link.click();
    
    // Clean up
    URL.revokeObjectURL(url);
  };

  return (
    <div className="w-full bg-white rounded-xl shadow-lg p-8 border-2 border-blue-300">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-blue-800 flex items-center">
          <span className="inline-block animate-bounce mr-2 text-sm">🎉</span>
          Results
          <span className="inline-block animate-bounce ml-2 text-sm">🎉</span>
        </h2>
        <button 
          onClick={exportToTextFile}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 text-sm"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
          Export Results
        </button>
      </div>
      
      <div className="flex justify-center">
        <ul className="space-y-3 w-full max-w-3xl">
          {matches.map((match, index) => (
            <li key={index} 
                className="p-3 bg-white rounded-lg 
                         flex items-center justify-center space-x-3 border border-blue-200
                         shadow-sm hover:shadow-md transition-all duration-300">
              <span 
                className="font-semibold text-lg name-color" 
                style={{ color: getNameColorValue(index) }}
              >
                {match.name}
              </span>
              <span className="text-gray-400 mx-2">→</span>
              <span 
                className="font-semibold text-lg" 
                style={{ color: getPrizeColorValue(index) }}
              >
                {match.prize}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ResultDisplay;