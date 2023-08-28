import "./App.css";
import CardsWrapper from "./components/CardsWrapper";

function App() {
  return (
    <div className="min-h-screen bg-hero-pattern bg-cover text-red-600">
      <div className="flex align-center justify-center flex-column p-[20px]">
        <div className="bg-gray-800 rounded-xl p-3 bg-opacity-90">
          <div className="">
            <CardsWrapper className="" cardsNumber="3" />
          </div>
        </div>
      </div>
      <div className="flex justify-center align-center">
        <button type="button" class="-mt-[16rem] text-bold text-xl w-[200px] h-[80px] bg-gradient-to-r from-red-900 to-red-700 hover:from-pink-500 hover:via-orange-500 hover:to-yellow-500 border-none rounded-xl">
          Jogar
        </button>
      </div>
      <div>
      
      </div>
    </div>
    

  );
}

export default App;