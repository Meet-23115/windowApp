
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.background}>
      <Text style={styles.text}>Hello</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor : "white",
    
  },
  text: {
    color: "black"
  }
});
