import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

<<<<<<< HEAD
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
=======
const nextScreenNavigation = () => {
  const transaction = Sentry.startTransaction({name: 'nextScreenNavigation'});

  console.log('nextScreenNavigation');

  Sentry.getCurrentHub().configureScope(scope => scope.setSpan(transaction));
  const span = transaction.startChild({
    func() {},
  });
>>>>>>> 123baf67a8afff0c3e33968c2d4111cb79673eb4
};

export default function Home({navigation}) {
  // throw new Error('Hellooooooo');
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Next Screen</Text>
      <Button
        title="Go to Third Screen"
        onPress={() => {
<<<<<<< HEAD
          setTimeout(() => {
            navigation.goBack();
          }, 100000);
=======
          navigation.navigate('Third');
>>>>>>> 123baf67a8afff0c3e33968c2d4111cb79673eb4
        }}
      />
      <Button title="Transaction Check" onPress={shopCheckout} />
    </View>
  );
}

const styles = StyleSheet.create({});
