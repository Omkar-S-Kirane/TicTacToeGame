import React, {useState, useEffect} from 'react';
import {Text, View, SafeAreaView, Pressable, Image} from 'react-native';
import styles from './Styles';
const App = () => {
  const [active_player, setActive_player] = useState('X');
  const [markers, setMarkers] = useState([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ]);
  const markPosition = position => {
    if (!markers[position]) {
      let temp = [...markers];
      temp[position] = active_player;
      setMarkers(temp);
      if (active_player === 'X') {
        setActive_player('O');
      } else {
        setActive_player('X');
      }
    } else alert('Box is Already Filled! Try Another.');
  };
  const resetMarkers = () => {
    setMarkers([null, null, null, null, null, null, null, null, null]);
  };
  const calculateWinner = squares => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  };
  useEffect(() => {
    const winner = calculateWinner(markers);
    if (winner === 'X') {
      alert('Player X Won!');
      resetMarkers();
    } else if (winner === 'O') {
      alert('Player O Won!');
      resetMarkers();
    }
  }, [markers]);
  return (
    <SafeAreaView style={styles.body}>
      <View
        style={[
          styles.playerInfo,
          {backgroundColor: active_player === 'X' ? '#FF0000' : '#0000FF'},
        ]}>
        <Text style={styles.playerTxt}>Player {active_player}'s turn</Text>
      </View>
      <View style={styles.mainContainer}>
        <Pressable style={styles.cell_top_left} onPress={() => markPosition(0)}>
          {markers[0] === 'X' && (
            <Image
              source={require('./source/assets/icons/cross.png')}
              style={styles.icon}
            />
          )}
          {markers[0] === 'O' && (
            <Image
              source={require('./source/assets/icons/zero.png')}
              style={styles.icon}
            />
          )}
        </Pressable>
        <Pressable style={styles.cell_top_mid} onPress={() => markPosition(1)}>
          {markers[1] === 'X' && (
            <Image
              source={require('./source/assets/icons/cross.png')}
              style={styles.icon}
            />
          )}
          {markers[1] === 'O' && (
            <Image
              source={require('./source/assets/icons/zero.png')}
              style={styles.icon}
            />
          )}
        </Pressable>
        <Pressable
          style={styles.cell_top_right}
          onPress={() => markPosition(2)}>
          {markers[2] === 'X' && (
            <Image
              source={require('./source/assets/icons/cross.png')}
              style={styles.icon}
            />
          )}
          {markers[2] === 'O' && (
            <Image
              source={require('./source/assets/icons/zero.png')}
              style={styles.icon}
            />
          )}
        </Pressable>
        <Pressable style={styles.cell_mid_left} onPress={() => markPosition(3)}>
          {markers[3] === 'X' && (
            <Image
              source={require('./source/assets/icons/cross.png')}
              style={styles.icon}
            />
          )}
          {markers[3] === 'O' && (
            <Image
              source={require('./source/assets/icons/zero.png')}
              style={styles.icon}
            />
          )}
        </Pressable>
        <Pressable style={styles.cell_mid_mid} onPress={() => markPosition(4)}>
          {markers[4] === 'X' && (
            <Image
              source={require('./source/assets/icons/cross.png')}
              style={styles.icon}
            />
          )}
          {markers[4] === 'O' && (
            <Image
              source={require('./source/assets/icons/zero.png')}
              style={styles.icon}
            />
          )}
        </Pressable>
        <Pressable
          style={styles.cell_mid_right}
          onPress={() => markPosition(5)}>
          {markers[5] === 'X' && (
            <Image
              source={require('./source/assets/icons/cross.png')}
              style={styles.icon}
            />
          )}
          {markers[5] === 'O' && (
            <Image
              source={require('./source/assets/icons/zero.png')}
              style={styles.icon}
            />
          )}
        </Pressable>
        <Pressable
          style={styles.cell_bottom_left}
          onPress={() => markPosition(6)}>
          {markers[6] === 'X' && (
            <Image
              source={require('./source/assets/icons/cross.png')}
              style={styles.icon}
            />
          )}
          {markers[6] === 'O' && (
            <Image
              source={require('./source/assets/icons/zero.png')}
              style={styles.icon}
            />
          )}
        </Pressable>
        <Pressable
          style={styles.cell_bottom_mid}
          onPress={() => markPosition(7)}>
          {markers[7] === 'X' && (
            <Image
              source={require('./source/assets/icons/cross.png')}
              style={styles.icon}
            />
          )}
          {markers[7] === 'O' && (
            <Image
              source={require('./source/assets/icons/zero.png')}
              style={styles.icon}
            />
          )}
        </Pressable>
        <Pressable
          style={styles.cell_bottom_right}
          onPress={() => markPosition(8)}>
          {markers[8] === 'X' && (
            <Image
              source={require('./source/assets/icons/cross.png')}
              style={styles.icon}
            />
          )}
          {markers[8] === 'O' && (
            <Image
              source={require('./source/assets/icons/zero.png')}
              style={styles.icon}
            />
          )}
        </Pressable>
      </View>
      <Pressable style={styles.cancleBTN} onPress={resetMarkers}>
        <Image
          source={require('./source/assets/icons/replay.png')}
          style={styles.cancelIcon}
        />
      </Pressable>
    </SafeAreaView>
  );
};
export default App;
