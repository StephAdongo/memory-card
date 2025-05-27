import { createContext, useContext } from 'react';

//create a context thatc\ can be used outside this file

const GameContext = createContext();

//export the useGame hook

export const useGame = () => useContext(GameContext);

//export the context for the provider file

export default GameContext;