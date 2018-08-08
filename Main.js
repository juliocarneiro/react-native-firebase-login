// Main.js
import React from 'react'
import { StyleSheet, Platform, Image, Text, View, TouchableOpacity } from 'react-native'
import firebase from 'react-native-firebase'

export default class Main extends React.Component {
state = { currentUser: null }
  componentDidMount() {
    const { currentUser } = firebase.auth()
    this.setState({ currentUser })
}

logout() {
  firebase.auth().signOut();
}

render() {
    const { currentUser } = this.state
return (
      <View style={styles.container}>
        <Text style={styles.text}>
          Olá {currentUser && currentUser.email}, seja bem vindo(a)!
        </Text>
        <TouchableOpacity onPress={this.logout}><Text>Logout</Text></TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text:{
    color:'black'
  }
})