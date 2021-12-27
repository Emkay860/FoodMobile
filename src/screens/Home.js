import React from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  Text,
} from 'react-native';
import { Appbar, Headline, IconButton, Searchbar } from 'react-native-paper';

import CardItem from './components/CardItem';

export default function Home({ navigation }) {
  return (
    <>
      <SafeAreaView>
        {/* <Appbar.Header style={styles.header}>
          <Appbar.Content title="Home" />
          <Appbar.Action icon="cart-outline" onPress={() => {}} />
        </Appbar.Header> */}
      </SafeAreaView>
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Headline style={styles.headingText}>Let’s eat</Headline>
          <Headline style={styles.headingText}>Amazing food 😋</Headline>
        </View>
        <View style={styles.searchBarContainer}>
          <Searchbar
            placeholder="Search food..."
            style={styles.innerSearchBarContainer}
            inputStyle={styles.searchBarInput}
          />

          <View style={styles.iconBtnContainer}>
            <IconButton
              icon="tune-vertical"
              color="black"
              size={26}
              onPress={() => console.log('Pressed')}
            />
          </View>
        </View>
        <ScrollView style={styles.verticalScrollViewContainer}>
          <ScrollView horizontal={true} style={styles.cardScrollView}>
            <CardItem />
            <CardItem />
            <CardItem />
            <CardItem />
            <CardItem />
          </ScrollView>
        </ScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  verticalScrollViewContainer: {
    // flex: 1,
    width: '100%',
    height: 'auto',
    // paddingBottom: 50,
    paddingTop: 50,
  },
  container: {
    flex: 1,
    // alignItems: 'space-between',
    padding: 20,
  },
  header: {
    backgroundColor: '#F8F8F8',
  },
  headingText: {
    fontSize: 28,
    color: 'black',
    marginTop: 10,
  },
  iconBtnContainer: {
    width: '15%',
    marginLeft: 10,
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
  cardScrollView: {},
});
