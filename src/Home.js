import React from 'react';

import {StyleSheet, Text, View, Button} from 'react-native';

import * as Sentry from '@sentry/react-native';

export default function Home({navigation}) {
  // try {
  //   throw new Error('Generating  new 2nd error');
  // } catch (err) {
  //   Sentry.captureException('Generating error for aman ');
  // }

  //New code

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home</Text>
      <Button
        title="Go to next Screen"
        onPress={() => {
          setTimeout(() => {
            navigation.navigate('NextScreen');
          }, 3000);
        }}
      />
      <Text>Hello Alok Gahlot</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
