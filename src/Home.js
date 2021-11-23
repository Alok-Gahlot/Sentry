import React from 'react';

import {StyleSheet, Text, View, Button} from 'react-native';

import * as Sentry from '@sentry/react-native';

const func = () => {
  console.log('true');
  setTimeout(() => {
    return 100;
  }, 3000);
};

const anotherfunc = val => {
  return true;
};
const shopCheckout = () => {
  const transaction = Sentry.startTransaction({name: 'CustomTransactionCheck'});

  Sentry.getCurrentHub().configureScope(scope => scope.setSpan(transaction));

  const result = func();

  const span = transaction.startChild({
    data: {
      result,
    },
    op: 'custom transac',
    description: `processing custom transac result`,
  });
  try {
    anotherfunc(result);
    span.setStatus('Ok');
  } catch (err) {
    span.setStatus('err');
    throw err;
  } finally {
    span.finish();
    transaction.finish();
  }
};

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

      <Button title="check custom transac" onPress={shopCheckout} />

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
