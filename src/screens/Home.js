import React from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import { Appbar, Headline, IconButton, Searchbar } from 'react-native-paper';

export default function Home({ navigation }) {
  return (
    <>
      <SafeAreaView>
        <Appbar.Header style={styles.header}>
          <Appbar.Content title="Home" />
          <Appbar.Action icon="cart-outline" onPress={() => {}} />
        </Appbar.Header>
      </SafeAreaView>
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Headline style={styles.headingText}>Let’s eat</Headline>
          <Headline style={styles.headingText}>Amazing food 😋</Headline>
        </View>
        <View style={styles.searchBarContainer}>
          <View style={styles.innerSearchBarContainer}>
            <Searchbar placeholder="Search food..." />
          </View>
          <View style={styles.iconBtnContainer}>
            <IconButton
              icon="tune-vertical"
              color="black"
              size={26}
              onPress={() => console.log('Pressed')}
            />
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    padding: 20,
  },
  header: {
    backgroundColor: '#F8F8F8',
  },
  headingText: {
    fontSize: 32,
    color: 'black',
    marginTop: 20,
  },
  iconBtnContainer: {
    width: '15%',
    marginLeft: 10,
    // padding: 5,
    backgroundColor: '#FA9905',
    alignItems: 'center',
    borderRadius: 10,
  },
  searchBarContainer: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  textContainer: {
    paddingBottom: 40,
    width: '80%',
  },
  innerSearchBarContainer: {
    width: '80%',
  },
});
