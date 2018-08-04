import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase'
import { Header } from './components/common';
import LoginForm from './components/LoginForm'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentWillMount(){
       firebase.initializeApp({
           apiKey: "AIzaSyAOnJSw1qKjkvTE0ym8Pz4QEGwqAzaypkM",
           authDomain: "authnative-dc2b7.firebaseapp.com",
           databaseURL: "https://authnative-dc2b7.firebaseio.com",
           projectId: "authnative-dc2b7",
           storageBucket: "authnative-dc2b7.appspot.com",
           messagingSenderId: "754631122880"
       })
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                <LoginForm />
            </View>
        );
    }
}

export default App