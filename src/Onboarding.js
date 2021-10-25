import React from 'react';

import {StyleSheet, Text, View, Button} from 'react-native';

export default function Home({navigation}) {
  setTimeout(() => {
    navigation.navigate('Home');
  }, 10000);
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Onboarding</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
