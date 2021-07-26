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
      <View>
        <Headline style={styles.headline}>Delicious Meals</Headline>
      </View>
      <View>
        <Subheading style={styles.subheading}>
          Search local resturants around you for the best deals
        </Subheading>
      </View>
      <Button
        mode="contained"
        color="black"
        style={styles.btn}
        onPress={() => navigation.navigate('SignIn')}
      >
        Get Started
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  btn: {
    padding: 16,
    width: '60%',
    marginTop: 10,
  },
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    backgroundColor: 'orange',
    paddingLeft: 20,
  },
  headline: {
    fontSize: 60,
    fontWeight: 'bold',
    lineHeight: 60,
    color: '#3D0B0B',
  },
  subheading: {
    fontSize: 18,
  },
  splashImageContainer: {
    alignItems: 'center',
    marginBottom: 50,
    width: '100%',
  },
  splashImage: {
    backgroundColor: 'orange',
  },
});
