import React, {useEffect} from 'react';
import {
  ActivityIndicator,
  Dimensions,
  StyleSheet,
  View,
  Text,
} from 'react-native';
import {Image} from 'react-native-elements';

const ImageScreen = props => {
  const {item} = props.route.params;

  useEffect(() => {
    console.log(item);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <View style={styles.firstStyle}>
        <Image
          style={styles.picSize}
          source={{uri: item.url}}
          PlaceholderContent={<ActivityIndicator />}
        />
        <Text style={styles.normalText}>{item.title}</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  firstStyle: {
    flex: 1,
    height: Dimensions.get('screen').height - 150,
  },
  picSize: {
    height: Dimensions.get('screen').height - 300,
    width: Dimensions.get('screen').width - 10,
    margin: 5,
  },
  firstActivityIndicatorStyle: {
    flex: 1,
    justifyContent: 'center',
  },
  normalText: {
    fontSize: 14,
    color: 'black',
    padding: 5,
  },
});

export default ImageScreen;
