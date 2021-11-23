import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

export default function Home({navigation}) {
  // throw new Error('Hellooooooo');
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Next Screen</Text>
      <Button
        title="Go to Home Screen"
        onPress={() => {
          setTimeout(() => {
            navigation.navigate('Third');
          }, 10000);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
