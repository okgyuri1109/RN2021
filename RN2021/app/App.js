import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, Platform } from 'react-native';

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.cardContainer}>
          <View style={styles.cardImageContainer}>
            <Image style={styles.cardImage}
              source={require('./0514.png')} />
          </View>
          <View>
            <Text style={styles.cardName}>
              GYURI
            </Text>
          </View>
          <View style={styles.cardOccupationContainer}>
            <Text style={styles.cardOccupation}>
              React Native Developer
            </Text>
          </View>
          <View>
            <Text style={styles.cardDescription}>
              gyu is a really great JavaScript developer. He
              loves using JS to build React Native applications
              for iOS and Android.
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

const profileCardColor = 'dodgerblue';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  cardContainer: {
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 3,
    borderStyle: 'solid',
    borderRadius: 20,
    backgroundColor: profileCardColor,
    width: 300,
    height: 400
  },
  cardImageContainer: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderWidth: 3,
    borderColor: 'black',
    width: 120,
    height: 120,
    borderRadius: 60,
    marginTop: 30,
    paddingTop: 2
  },
  cardImage: {
    width: 110,
    height: 110,
    borderRadius: 60
  },
  cardName: {
    color: 'white',
    marginTop: 30,
    ...Platform.select({
      ios: {
        fontFamily: 'American Typewriter',
      },
      android: {
        fontFamily: 'monospace',
        fontStyle: 'italic'
      }
    }),
  },
  cardOccupationContainer: {
    borderColor: 'black',
    borderBottomWidth: 3
  },
  cardOccupation: {
    marginTop: 10,
    marginBottom: 10,
  },
  cardDescription: {
    marginTop: 10,
    marginRight: 40,
    marginLeft: 40,
    marginBottom: 10
  }
});

export default App;