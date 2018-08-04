import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase'
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';
// import dotenv from 'dotenv';

// dotenv.config({silent: true})

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedIn: false
        };
        this.renderContent = this.renderContent.bind(this)
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

       firebase.auth().onAuthStateChanged((user)=>{
           user ? this.setState({ loggedIn: true }) 
           : this.setState( { loggedIn: false })
       })
    }

    renderContent(){
        switch(this.state.loggedIn){
            case true:
                return (
            
                    <Button
                     onPress={()=> firebase.auth().signOut()}>
                     Log Out
                    </Button>
            )

            case false:
                return <LoginForm />
            default:
            return <Spinner />
        }
    }


    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                    {this.renderContent()} 
            </View>
        );
    }
}

export default App