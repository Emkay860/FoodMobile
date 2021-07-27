import * as React from 'react';
import { SafeAreaView, StyleSheet, View, Platform } from 'react-native';
import {
  Button,
  Appbar,
  Divider,
  TextInput,
  Headline,
  Caption,
} from 'react-native-paper';

export default function SignIn({ navigation }) {
  return (
    <>
      <SafeAreaView>
        <Appbar.Header style={styles.header}>
          <Appbar.BackAction />
          <Appbar.Content
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
          />
        </Appbar.Header>
      </SafeAreaView>
      <SafeAreaView style={styles.container}>
        <View style={styles.inputContainer}>
          <View style={styles.textContainer}>
            <Headline style={styles.headingText}>Welcome Back</Headline>
            <Caption>We’ve missed you</Caption>
          </View>
          <TextInput
            mode="outlined"
            placeholder="Email"
            theme={{
              colors: { primary: '#FA9B0B', underlineColor: 'transparent' },
            }}
            style={styles.input}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            mode="outlined"
            placeholder="Password"
            theme={{
              colors: { primary: '#FA9B0B', underlineColor: 'transparent' },
            }}
            style={styles.input}
          />
        </View>

        <Button
          mode="contained"
          onPress={() => navigation.push('SplashScreen')}
          color="#FA9B0B"
          icon="arrow-right"
          contentStyle={styles.signInBtnContent}
          style={styles.signInBtn}
          uppercase={false}
          labelStyle={styles.signInBtnLabel}
        >
          Sign in
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
    paddingTop: 100,
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
  inputContainer: {
    width: '80%',
    marginBottom: 30,
  },
  input: {
    backgroundColor: '#FFFFFF',
    color: 'black',
    fontWeight: 'bold',
  },
  textContainer: {
    paddingBottom: 40,
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
    padding: 10,
  },
  signInBtnLabel: {
    fontSize: 16,
  },
});
