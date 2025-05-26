import {GameProvider} from './context/GameProvider';
import GamePage from './pages/GamePage';
import './App.css';

function App() {
  return (
    <GameProvider>
      <div className="App">
        <GamePage />
      </div>
    </GameProvider>
  );
}
export default App;