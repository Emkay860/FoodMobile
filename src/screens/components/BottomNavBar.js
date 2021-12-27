import * as React from 'react';
import { StyleSheet } from 'react-native';
import { BottomNavigation, Text } from 'react-native-paper';

import Home from '../Home';
import CreateMenuItem from './CreateMenuItem';

const HomeRoute = () => <Home />;

const CreateMenuItemRoute = () => <CreateMenuItem />;

const RecentsRoute = () => <Text>Recents</Text>;

const BottomNavBar = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'home', title: 'Home', icon: 'home' },
    { key: 'createNewItem', title: 'Add Item', icon: 'album' },
    { key: 'recents', title: 'Recents', icon: 'history' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: HomeRoute,
    createNewItem: CreateMenuItemRoute,
    recents: RecentsRoute,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      barStyle={{ backgroundColor: 'black', marginTop: 30 }}
      activeColor="#FA9905"
      style={styles.navbar}
    />
  );
};

const styles = StyleSheet.create({
  navbar: {
    // borderRadius: 20,
  },
});

export default BottomNavBar;
