import React, { Component } from 'react';
import { View, Text,  } from 'react-native';
import * as firebase from 'firebase';
import { Header, Button, Spiner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {

  state = { loggedIn: null };
    
  componentWillMount(){ 
    firebase.initializeApp({
      apiKey: "AIzaSyDbugZbU_BwI8PrN481t8pbSJGmBR_QBzU",
      authDomain: "auth-e5c07.firebaseapp.com",
      databaseURL: "https://auth-e5c07.firebaseio.com",
      projectId: "auth-e5c07",
      storageBucket: "auth-e5c07.appspot.com",
      messagingSenderId: "210359947651"
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true});
      } else {
        this.setState({ loggedIn: false});
      }
    });
  }

  renderContent(){
    switch (this.state.loggedIn){
      case true:
        return ( 
          <Button onPress={() => firebase.auth().signOut()}>
           Log out 
          </Button>
        )
      case false:
        return <LoginForm/>;
      default: 
        return <Spiner size="large" />
    }
  }


  render() {
    return (
      <View>
      <Header headerText={'Auth'}/>
      {this.renderContent()}
      </View>
    );
  }
}

export default App;