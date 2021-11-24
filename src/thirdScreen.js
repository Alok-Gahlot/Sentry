import React from 'react';
import {View, Text, Button, FlatList, Image, StyleSheet} from 'react-native';
import * as Sentry from '@sentry/react-native';
const func = () => {
  console.log('third');
  setTimeout(() => {
    return 100;
  }, 3000);
};

const str = 'https://image.tmdb.org/t/p/original';

const renderItem = ({item}) => {
  return (
    <Image
      style={styles.imageSty}
      source={{uri: str.concat(item.poster_path)}}
      resizeMode="center"
    />
  );
};

export default function thirdScreen({navigation}) {
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    fetch(
      'https://api.themoviedb.org/3/discover/tv?api_key=88fe02d450f4e58ea616b42de9b0d0e7&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false&with_watch_monetization_types=flatrate',
    )
      .then(response => response.json())
      .then(json => {
        setData(json.results);
      })
      .catch(error => console.error(error));
  }, []);
  console.log(data);
  import {View, Text} from 'react-native';

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>THird scren</Text>
      <Text onPress={() => navigation.navigate('Fourth')}>
        Click me to navigate forth screen
      </Text>
      <FlatList data={data} renderItem={renderItem} />
    </View>
  );
}

const styles = StyleSheet.create({
  imageSty: {
    width: '100%',
    height: 300,
  },
});
