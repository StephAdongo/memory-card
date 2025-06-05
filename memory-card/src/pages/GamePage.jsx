import React from 'react';
import { useGame } from '../context/GameContext';
import Header from '../components/layout/Header';
import GameBoard from '../components/game/GameBoard';
import GameModal from '../components/ui/GameModal';
import './GamePage.css';
import SettingsPanel from '../components/ui/SettingsPanel';
import HelpPanel from '../components/ui/HelpPanel';
import StartScreen from '../components/ui/StartScreen';

export default function GamePage() {
    const { gameStarted } = useGame();

    return (
        <div className="game-page">
        <div className="game-background"></div>
        <div className="game-container">
          {gameStarted && <Header />}
          
          <div className="game-area">
            {!gameStarted ? (
              <StartScreen />
            ) : (
              <GameBoard />
            )}
          </div>
          
          <GameModal />
          <SettingsPanel />
          <HelpPanel />
        </div>
      </div>
    );
  } 
    