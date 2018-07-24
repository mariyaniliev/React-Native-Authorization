import React, { Component } from 'react';
import { View, ActivityIndicator, StyleSheet  } from 'react-native';

const  Spiner = ({ size }) => {
    return (
      <View style={styles.spinerStyle}>
          <ActivityIndicator size={ size || 'large' }/>
      </View>
    );
}

const styles = StyleSheet.create({
    spinerStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export { Spiner };
