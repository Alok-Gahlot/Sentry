import React from 'react';

import * as Sentry from '@sentry/react-native';
import {StyleSheet, Text, View, Button} from 'react-native';

const customFuntion = result => {
  setTimeout(() => {
    alert('hello');
  }, 100000);
};

const shopCheckout = () => {
  console.log('function pressed');
  const transaction = Sentry.startTransaction({name: 'Custom Transaction'});

  Sentry.getCurrentHub().configureScope(scope => scope.setSpan(transaction));

  const result = 'Task testing';
  const span = transaction.startChild({
    data: {
      result,
    },
    op: 'task',
    description: `testing the custom transaction`,
  });
  try {
    customFuntion(result);
    span.setStatus('Ok');
  } catch (err) {
    span.setStatus(err);
    throw err;
  } finally {
    span.finish();
    transaction.finish();
  }
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
          }, 100000);
        }}
      />
      <Button title="Transaction Check" onPress={shopCheckout} />
    </View>
  );
}

const styles = StyleSheet.create({});
