import React from 'react';

import * as Sentry from '@sentry/react-native';
import {StyleSheet, Text, View, Button} from 'react-native';

const nextScreenNavigation = () => {
  const transaction = Sentry.startTransaction({name: 'nextScreenNavigation'});

  console.log('nextScreenNavigation');

  Sentry.getCurrentHub().configureScope(scope => scope.setSpan(transaction));
  const span = transaction.startChild({
    func() {},
  });
};

export default function Home({navigation}) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Next Screen</Text>
      <Button
        title="Go to Home Screen"
        onPress={() => {
          setTimeout(() => {
            navigation.goBack();
          }, 10000);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
