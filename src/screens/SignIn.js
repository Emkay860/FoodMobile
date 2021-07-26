import * as React from 'react';
import { SafeAreaView, StyleSheet, View, Platform } from 'react-native';
import { Button, Appbar, Divider, TextInput } from 'react-native-paper';

export default function SignIn({ navigation }) {
  return (
    <>
      <SafeAreaView>
        <Appbar.Header style={styles.header}>
          <Appbar.BackAction />
          <Appbar.Content
            title="Sign in"
            color="black"
            titleStyle={styles.appBarTitle}
            style={styles.appBarNav}
          />
          <Divider />
          <Appbar.Content
            title="Register"
            color="black"
            titleStyle={styles.appBarTitle}
          />
        </Appbar.Header>
      </SafeAreaView>
      <SafeAreaView style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            mode="outlined"
            placeholder="Email"
            theme={{
              colors: { primary: '#FA9B0B', underlineColor: 'transparent' },
            }}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            mode="outlined"
            placeholder="Email"
            theme={{
              colors: { primary: '#FA9B0B', underlineColor: 'transparent' },
            }}
            style={styles.input}
          />
        </View>

        <Button
          mode="contained"
          onPress={() => navigation.push('SplashScreen')}
        >
          Go back
        </Button>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    backgroundColor: '#FFFFFF',
  },
  appBarNav: {
    alignItems: 'center',
    borderBottomWidth: 3,
    borderBottomColor: '#FA9B0B',
  },
  appBarTitle: {
    padding: 5,
    fontWeight: 'bold',
  },
  inputContainer: {
    width: '100%',
    marginBottom: 30,
  },
  input: {
    borderRadius: 10,
  },
});
