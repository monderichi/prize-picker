import PrizePicker from "./components/PrizePicker";

function App() {
  return (
    <div className="min-h-screen w-full flex justify-center items-center p-4 bg-gradient-to-br from-purple-100 to-pink-100">
      <div className="container h-screen flex justify-center items-center pl-64"> {/* Increased pl-32 to pl-64 */}
        <PrizePicker />
      </div>
    </div>
  );
}

export default App;
