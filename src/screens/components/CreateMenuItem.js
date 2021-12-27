import * as React from 'react';
import {
  KeyboardAvoidingView,
  SafeAreaView,
  StyleSheet,
  View,
  Platform,
  ScrollView,
} from 'react-native';
import {
  Button,
  Appbar,
  TextInput,
  Headline,
  Caption,
  Paragraph,
} from 'react-native-paper';
import { Header } from '@react-navigation/stack';

import ImageChooser from './ImageChooser';

export default function Register({ navigation }) {
  return (
    <>
      <SafeAreaView>
        <Appbar.Header style={styles.header}>
          <Appbar.BackAction onPress={() => navigation.push('SplashScreen')} />
          <Appbar.Content
            subtitle={'Create New Item'}
            color="black"
            subtitleStyle={[styles.appBarTitle]}
            style={styles.headingText}
          />
        </Appbar.Header>
      </SafeAreaView>

      <ScrollView>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : null}
          style={styles.container}
        >
          <View style={styles.innerContainer}>
            {/* <View style={styles.textContainer}>
              <Headline style={styles.headingText}>Create New Item</Headline>
            </View> */}
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
                secureTextEntry={true}
              />
            </View>
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
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingBottom: 40,
  },
  innerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: '#F8F8F8',
  },
  header: {
    backgroundColor: '#FFFFFF',
  },
  appBarNav: {
    alignItems: 'center',
  },
  appBarTitle: {
    paddingBottom: 10,
    fontSize: 24,
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
    color: 'black',
    paddingLeft: 30,
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
