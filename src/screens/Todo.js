import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Dimensions,
  FlatList,
  StyleSheet,
  View,
} from 'react-native';
import {CheckBox} from 'react-native-elements';

const ToDoScreen = props => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    toDoList();
  }, []);

  const toDoList = async () => {
    setIsLoading(true);
    try {
      let response = await axios.get(
        'https://jsonplaceholder.typicode.com/todos',
      );
      setData(response.data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
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
          data={data}
          renderItem={({item, index}) => {
            return (
              <CheckBox
                key={index}
                textStyle={styles.normalText}
                title={item.title}
                checked={item.completed}
                size={20}
                onPress={() => {
                  data[index].completed = !data[index].completed;
                  setData([...data]);
                }}
              />
            );
          }}
        />
      </View>
      {isLoading && (
        <ActivityIndicator
          style={styles.firstActivityIndicatorStyle}
          size={'large'}
          color={'#0000ff'}
        />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  firstStyle: {
    flex: 1,
    height: Dimensions.get('screen').height - 150,
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

export default ToDoScreen;
