import React , {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';

export default function App() {

  const [userNumber,setUserNumber] = useState();
  const [guessRounds,setGuessRounds] = useState(0);

  const startGamaHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);  
    setGuessRounds(0);
  };  

  const gameOverHandler = numOfRounds => {
    setGuessRounds(numOfRounds);
  };

  const configureNewGame = () => {
    setGuessRounds(0);
    setUserNumber(null);
  }

  let content = <StartGameScreen onStartGame={startGamaHandler} />;

  if(userNumber && guessRounds <= 0 ){
    content = <GameScreen userChoise={userNumber} onGameOver = {gameOverHandler} />;
  }
  else if(guessRounds > 0) {
    content = <GameOverScreen userNumber={userNumber} roundsNumber={guessRounds} onRestart={configureNewGame} />
  }

  return (
    <View style={styles.screen}>
      <Header title="Guess A Number"/>
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen:{
    flex:1
  }
});