import * as React from 'react';
import {View, Text} from 'react-native';
import {
  NavigationContainer,
  NavigationContainerRef,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../Home';
import NextScreen from '../NextScreen';
import Onboarding from '../Onboarding';
import Third from '../thirdScreen';
import Fourth from '../fourth';
const Stack = createNativeStackNavigator();

const App = props => {
  const navigation = React.useRef();
  return (
    <NavigationContainer
      ref={navigation}
      onReady={() => {
        props.reactNavigationV5Instrumentation.registerNavigationContainer(
          navigation,
        );
      }}>
      <Stack.Navigator initialRouteName="Onboarding">
        <Stack.Screen name="Onboarding" component={Onboarding} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="NextScreen" component={NextScreen} />
        <Stack.Screen name="Third" component={Third} />
        <Stack.Screen name="Fourth" component={Fourth} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
