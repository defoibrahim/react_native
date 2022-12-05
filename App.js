import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Welcome to React Native</Text>
      <Text style={styles.baseText}>I HATE CSS</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF111',
    alignItems: 'center',
    justifyContent: 'center',
  },
  baseText: {
    fontFamily: "Cochin",
    fontSize: 26,
    fontWeight: "bold",
    color:'#1911FF'
  },
  titleText: {
    fontSize: 26,
    fontWeight: "bold"
  }
});
