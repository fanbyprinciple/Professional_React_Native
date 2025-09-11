import { useState } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import PieChart from 'react-native-pie-chart';

export default function ScoreboardScreen({ route }) {
  const { numPlayers } = route.params;
  const [scores, setScores] = useState(Array(numPlayers).fill(0));

  const addScore = (index) => {
    const newScores = [...scores];
    newScores[index] += 1;
    setScores(newScores);
  };

  const totalScore = scores.reduce((a, b) => a + b, 0) || 1;

  // Generate colors for players
  const colors = ['#f44336', '#2196f3', '#ffeb3b', '#4caf50', '#ff9800', '#9c27b0', '#00bcd4', '#e91e63', '#795548'];

  const series = scores.map(score => score || 1);
  const sliceColors = colors.slice(0, numPlayers);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Scoreboard</Text>
      <PieChart widthAndHeight={250} series={series} sliceColor={sliceColors} />

      <FlatList
        data={scores.map((score, idx) => ({ key: idx.toString(), score }))}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => (
          <View style={styles.playerRow}>
            <Text style={{ ...styles.playerText, color: colors[item.key] }}>
              Player {parseInt(item.key) + 1}: {item.score}
            </Text>
            <TouchableOpacity style={styles.scoreButton} onPress={() => addScore(parseInt(item.key))}>
              <Text style={styles.scoreButtonText}>+</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex:1, alignItems: 'center', paddingTop: 40 },
  title: { fontSize: 28, marginBottom: 20 },
  playerRow: {
    flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',
    width: '60%', paddingVertical: 10,
  },
  playerText: { fontSize: 20 },
  scoreButton: {
    backgroundColor: '#2196f3', padding: 10, borderRadius: 8,
  },
  scoreButtonText: { color: 'white', fontSize: 20, fontWeight: 'bold' },
});
