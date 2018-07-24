import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button, Card, CardSection, Input, Spiner  } from './common';

class LoginForm extends Component {
    state = { 
        email: '',
        password: '',
        error: '',
        loading: false
    };

    
    onButtonPress(){
        const { email, password } = this.state;
        this.setState({ error: 'ERROR', loading: true});
        console.log('HERE');
        console.log(this.state.loading)

        //Authenticate the user 
        firebase.auth().signInWithEmailAndPassword(email,password)
        .then(this.onLoginSuccess.bind(this))
        .catch(() => {
            firebase.auth().createUserWithEmailAndPassword(email,password)
            .then(this.onLoginSuccess.bind(this))
            .catch(this.onLoginFail.bind(this));
        })
        
    }

    onLoginSuccess() {
        this.setState({
            email: '',
            password: '',
            loading: flase,
            error: ''

        })
    }
    onLoginFail() {
        this.setState({ 
            error: 'Authentication Faild', 
            loading: false
        })
    }

    renderButton(){
        if(this.state.loading){
            return <Spiner size="small"/>;
        }
        
        return <Button onPress={this.onButtonPress.bind(this)}> Log in </Button>
    }
    

  render() {
    return (
      <Card>
        <CardSection>
            <Input
            placeholder="user@gmail.com"
            label= "Email"
            value = {this.state.email}
            onChangeText={ email => this.setState({ email })}
            />
        </CardSection>
        {/* Password input */}
        <CardSection>
            <Input
                secureTextEntry
                placeholder="password"
                label= "Password"
                value={this.state.password}
                onChangeText={password => this.setState({ password })}
            />
        </CardSection>
        
        {/* Error Message */}
        <Text style={styles.errorTextStyle}> {this.state.error}</Text>

        <CardSection>
            {this.renderButton()}
        </CardSection>

        <CardSection >
            <Text style={styles.needAcountStyle} > Need an account?</Text>
        </CardSection>
      </Card>
      
        
    );
  }
}

const styles = StyleSheet.create({
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red',
    },
    needAcountStyle: {
        flex: 1,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#007aff',
        fontSize: 12,
        fontWeight: '600',
    }
})

export default LoginForm;
