import * as React from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';
import {
  Button,
  Title,
  Subheading,
  Headline,
  Avatar,
} from 'react-native-paper';

export default function SplashScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.splashImageContainer}>
        <Avatar.Image
          size={200}
          source={require('../../assets/image1.png')}
          style={styles.splashImage}
        />
      </View>
      <View style={styles.subheadingContainer}>
        <Headline style={styles.headline}>Delicious Meals</Headline>
      </View>
      <View style={styles.subheadingContainer}>
        <Subheading style={styles.subheading}>
          Search local resturants around you for the best meals
        </Subheading>
        <Button
          mode="contained"
          color="black"
          style={styles.btn}
          onPress={() => navigation.navigate('SignIn')}
          icon="arrow-right"
          contentStyle={styles.btnIcon}
          uppercase={false}
          labelStyle={styles.btnLabel}
        >
          Get Started
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  btn: {
    padding: 16,
    width: '70%',
    marginTop: 10,
  },
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    backgroundColor: 'orange',
    paddingLeft: 20,
    paddingRight: 20,
  },
  headline: {
    fontSize: 60,
    fontWeight: 'bold',
    lineHeight: 60,
    color: '#3D0B0B',
    marginTop: 50,
  },
  subheading: {
    fontSize: 18,
  },
  subheadingContainer: {
    alignItems: 'center',
    // marginBottom: 50,
    width: '100%',
  },
  splashImageContainer: {
    alignItems: 'center',
    marginBottom: 50,
    width: '100%',
  },
  splashImage: {
    backgroundColor: 'orange',
  },
  btnIcon: {
    flexDirection: 'row-reverse',
  },
  btnLabel: {
    fontSize: 18,
    fontWeight: '100',
  },
});
