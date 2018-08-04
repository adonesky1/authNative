import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection, Input, Spinner } from './common';

class LoginForm extends Component {
    constructor(props){
        super(props)
        this.state = { email: '', password: '', error: '', loading: false }
    }
    onButtonPress(){
        const { email, password } = this.state

        this.setState({ error: '', loading: true })
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(this.onLoginSuccess.bind(this))
        .catch(()=>{
            firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(this.onLoginSuccess.bind(this))        
            .catch(this.onLoginFailure.bind(this))
        })
    }

    onLoginFailure(){
        this.setState({ error: 'Authentication Failed', loading: false})
    }

    onLoginSuccess(){
        this.setState({
            email: '',
            password: '',
            loading: false,
            error: ''
        })
    }

    renderButton(){
        if(this.state.loading) return <Spinner size="small" />
        else{
            return( 
                <Button onPress={this.onButtonPress.bind(this)}>
                    Log in
                </Button>
            )
        }
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
                        onChangeText={email=> this.setState({ email }, ()=> console.log("THIS.email", this.state.email))}
                        />
                </CardSection>
                <CardSection>
                    <Input 
                        secureTextEntry
                        placeholder="password"
                        label="Password"
                        value={this.state.password}
                        onChangeText={password=> this.setState({password}, ()=> console.log("THIS.PW", this.state.password))}
                    
                    />
                </CardSection>

                <Text style={errorStyle}>
                    {this.state.error}
                </Text>

                <CardSection>
                   {this.renderButton()}
                </CardSection>
            </Card>

        )
    }
}

const styles = {
    errorStyle:{
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
}

export default LoginForm;