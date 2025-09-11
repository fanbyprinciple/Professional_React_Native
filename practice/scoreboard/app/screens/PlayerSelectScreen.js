import { useState } from 'react';
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function PlayerSelectScreen({ navigation }) {
  const [numPlayers, setNumPlayers] = useState('4');

  const onStartGame = () => {
    const n = parseInt(numPlayers);
    if (n > 1 && n < 10) {
      navigation.navigate('Scoreboard', { numPlayers: n });
    } else {
      Alert.alert('Invalid number', 'Please enter a player count between 2 and 9');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Number of Players</Text>
      <TextInput
        style={styles.input}
        keyboardType="number-pad"
        value={numPlayers}
        onChangeText={setNumPlayers}
        maxLength={1}
      />
      <Button title="Start" onPress={onStartGame} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex:1, justifyContent: 'center', alignItems: 'center' },
  label: { fontSize: 20, marginBottom: 10 },
  input: {
    height: 50,
    width: 100,
    borderColor: '#666',
    borderWidth: 1,
    marginBottom: 20,
    fontSize: 24,
    textAlign: 'center',
  },
});
