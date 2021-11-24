import React from 'react';
import {View, Text} from 'react-native';
export default function thirdScreen({navigation}) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>THird scren</Text>
      <Text onPress={() => navigation.navigate('Fourth')}>
        Click me to navigate forth screen
      </Text>
    </View>
  );
}
