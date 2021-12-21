import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import {
  Button,
  Appbar,
  TextInput,
  Headline,
  Caption,
  Paragraph,
} from 'react-native-paper';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

import ImageChooser from './ImageChooser';

function CreateMenuItem() {
  return (
    <>
      <SafeAreaView>
        <Appbar.Header style={styles.header}>
          <Appbar.BackAction onPress={() => navigation.push('SplashScreen')} />
          {/* <Appbar.Content
            title="Sign in"
            color="black"
            titleStyle={[styles.appBarTitle, styles.active]}
            style={styles.appBarNav}
          />
          <Appbar.Content
            title="Register"
            color="black"
            titleStyle={styles.appBarTitle}
            style={styles.appBarNav}
            onPress={() => navigation.navigate('Register')}
        /> */}
        </Appbar.Header>
      </SafeAreaView>
      <SafeAreaView style={styles.container}>
        <View style={styles.textContainer}>
          <Headline style={styles.headingText}>Create New Item</Headline>
        </View>
        <ImageChooser />
        <View style={styles.inputContainer}>
          <TextInput
            mode="outlined"
            placeholder="Title"
            theme={{
              colors: { primary: '#FA9B0B', underlineColor: 'transparent' },
              roundness: 8,
            }}
            style={styles.input}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            mode="outlined"
            placeholder="Price"
            theme={{
              colors: { primary: '#FA9B0B', underlineColor: 'transparent' },
              roundness: 8,
            }}
            style={styles.input}
            textContentType="password"
            secureTextEntry={true}
          />
        </View>{' '}
        <View style={styles.inputContainer}>
          <TextInput
            mode="outlined"
            placeholder="Description"
            theme={{
              colors: { primary: '#FA9B0B', underlineColor: 'transparent' },
              roundness: 8,
            }}
            style={styles.input}
            multiline
            numberOfLines={4}
          />
        </View>
        <Button
          mode="contained"
          onPress={() => navigation.push('Home')}
          color="#FA9B0B"
          icon="plus"
          contentStyle={styles.signInBtnContent}
          style={styles.signInBtn}
          uppercase={false}
          labelStyle={styles.signInBtnLabel}
        >
          Add Item
        </Button>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#F8F8F8',
    paddingTop: 20,
    paddingBottom: 100,
  },
  header: {
    backgroundColor: '#FFFFFF',
  },
  appBarNav: {
    alignItems: 'center',
  },
  appBarTitle: {
    padding: 5,
    fontSize: 16,
  },
  active: {
    borderBottomWidth: 3,
    borderBottomColor: '#FA9B0B',
  },
  captionText: {
    fontSize: 16,
  },
  inputContainer: {
    width: '80%',
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#FFFFFF',
    color: 'black',
    fontWeight: 'bold',
  },
  textContainer: {
    paddingBottom: 40,
    width: '80%',
  },
  headingText: {
    fontSize: 32,
    color: 'black',
  },
  signInBtnContent: {
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
  },
  signInBtn: {
    width: '80%',
    padding: 5,
    borderRadius: 8,
  },
  signInBtnLabel: {
    fontSize: 16,
  },
});

export default CreateMenuItem;
