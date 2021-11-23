import React from 'react';
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
  // throw new Error('Hellooooooo');
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Next Screen</Text>
      <Button
        title="Go to Third Screen"
        onPress={() => {
          navigation.navigate('Third');
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
