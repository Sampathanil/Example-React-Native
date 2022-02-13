import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Dimensions,
  FlatList,
  StyleSheet,
  View,
} from 'react-native';
import {Image} from 'react-native-elements';

const PicScreen = props => {
  const [data, setData] = useState([]);

  useEffect(() => {
    downloadPics();
  }, []);

  const downloadPics = async () => {
    try {
      let response = await axios.get(
        'https://jsonplaceholder.typicode.com/photos',
      );
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <View style={styles.firstStyle}>
        <FlatList
          keyboardShouldPersistTaps="handled"
          keyExtractor={item => {
            return item.id;
          }}
          numColumns={3}
          data={data}
          renderItem={({item, index}) => {
            return (
              <Image
                key={index}
                style={styles.picSize}
                source={{uri: item.thumbnailUrl}}
                PlaceholderContent={<ActivityIndicator />}
                onPress={() =>
                  props.navigation.navigate('Image', {
                    item: item,
                  })
                }
              />
            );
          }}
        />
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
    height: 125,
    width: 125,
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

export default PicScreen;
