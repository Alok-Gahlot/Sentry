import React from 'react';
import {View, Text, Button} from 'react-native';
import * as Sentry from '@sentry/react-native';
const func = () => {
  console.log('third');
  setTimeout(() => {
    return 100;
  }, 3000);
};

const anotherfunc = val => {
  return true;
};
const shopCheckout = () => {
  const transaction = Sentry.startTransaction({name: 'Third screen Trans'});

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

export default function thirdScreen({navigation}) {
  return (
    <View>
      <Text>THird scren</Text>

      <Button title="check custom transac" onPress={shopCheckout} />
      <Button
        title="go to home screen"
        onPress={() => {
          navigation.navigate('Home');
        }}
      />
    </View>
  );
}
