import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/header';
import Home from './src/components/Inicial/Home';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.diamond}></View>
      <Header/>
      <Home/>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2D2B4E',
    alignItems: 'center',
    
  },
  texto: {
    color: "#000"
  },
  diamond: {
    position: "absolute",
    left: -10,
    top: -50,
    borderRadius: 40,
    width: 300,
    height: 300,
    transform: [{ rotate: '45deg' }],
    backgroundColor: '#FF85AF',
  },
  
});
