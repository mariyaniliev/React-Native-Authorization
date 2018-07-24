import React from 'react';
import { View, Text, TextInput, StyleSheet  } from 'react-native';

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
    const { inputStyle, labelStyle, containerStyle } = styles; 
   
    return (
      <View style={ containerStyle } >
        <Text style={ labelStyle }>{label}</Text>
       
        <TextInput
        secureTextEntry={secureTextEntry} //When typing password will show stars 
        placeholder={placeholder}
        autoCorrect={false} //Stop validation
        style={ inputStyle }  
        value={ value }
        onChangeText={ onChangeText }
        />
      </View>
    );
}

const styles = StyleSheet.create({
    inputStyle:{
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 20,
        flex: 2
    },
    labelStyle:{
        fontSize: 18,
        paddingLeft: 20,
        flex: 1

    },
    containerStyle:{
        height: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    }
})

export { Input };
