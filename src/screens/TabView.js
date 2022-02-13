import React, {useState} from 'react';
import {Dimensions} from 'react-native';
import {TabView, SceneMap} from 'react-native-tab-view';
import PicScreen from './PicScreen';
import ToDoScreen from './Todo';

const TabViewScreen = props => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: 'first', title: 'Todo'},
    {key: 'second', title: 'Pics'},
  ]);

  const FirstRoute = () => <ToDoScreen {...props} />;

  const SecondRoute = () => <PicScreen {...props} />;

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });

  return (
    <TabView
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{width: Dimensions.get('screen').width}}
    />
  );
};

export default TabViewScreen;
