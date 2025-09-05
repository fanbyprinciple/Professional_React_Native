import { StyleSheet } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import { Component } from 'react';

import { Pressable} from 'react-native';

class MyClass extends Component {
  constructor(props: any) {
    super(props);
    this.handlePress = this.handlePress.bind(this);
  }

  handlePress(event: any) {
    console.log(this);
  }

  render() {
    return (
      <Pressable onPress={this.handlePress}>
        <Text>Button</Text>
      </Pressable>
    );
  }
}

export default function TabOneScreen() {

  const car = {
    color: 'red',
      extras: {
          radio: "premium",
          ac: false
      },
      sellingDate: new Date(),
      writeColor: function() {
        console.log('This car is ' + this.color)
      }
  };

  const _car = {...car};
  const _car2 = Object.assign({}, car)
  const _car3 = JSON.parse(JSON.stringify(car))

  car.extras.ac = true;

  let name = ["john", "doe"]

  let [firstname, lastname] = name

  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>index</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Text>{JSON.stringify(_car)}</Text>
      <Text>{JSON.stringify(_car2)}</Text>
      <Text>{JSON.stringify(_car3)}</Text>
      <Text>{JSON.stringify(car)}</Text>

      <Text>firstname:{firstname}</Text>
      <MyClass />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
