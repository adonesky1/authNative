import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection, Input } from './common';

class LoginForm extends Component {
    state = { email: '', password: '', error: '' }

    onButtonPress(){
        const {email, password} = this.state
        firebase.auth().signInWithEmailAndPassword(email, password)
        .catch(()=>{
            firebase.auth().createUserWithEmailAndPassword(email, password)
            .catch(()=>{
                this.setState({ error: "Authentication Failed"})
            })
        })
    }

    render(){
        const { errorStyle } = styles
        return (

            <Card>
                <CardSection>
                    <Input
                        placeholder="user@gmail.com"
                        label= 'Email:'
                        value={this.state.email}
                        onChangeText={email=> this.setState({ email })}
                        />
                </CardSection>
                <CardSection>
                    <Input 
                        secureTextEntry
                        placeholder="password"
                        label="Password"
                        value={this.state.password}
                        onChangeText={password=> this.setState({password})}
                    
                    />
                </CardSection>

                <Text style={errorStyle}>
                    {this.state.error}
                </Text>

                <CardSection>
                    <Button onPress={}>
                        Log in
                    </Button>
                </CardSection>
            </Card>

        )
    }
}

const style = {
    errorStyle:{
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
}

export default LoginForm;