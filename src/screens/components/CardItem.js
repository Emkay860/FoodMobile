import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

export default function CardItem() {
  return (
    <View style={styles.container}>
      <Avatar.Image
        size={150}
        style={styles.img}
        source={require('./../../../assets/food.jpeg')}
      />
      <Card style={styles.cardBody}>
        <Card.Content>
          <Title>Card title</Title>
          <Paragraph>Card content</Paragraph>
        </Card.Content>
        <Card.Actions>
          <Button>Cancel</Button>
          <Button>Ok</Button>
        </Card.Actions>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // borderWidth: 3,
    // borderColor: 'red',
    // height: 600,
    width: 200,
    marginRight: 10,
    alignItems: 'center',
    padding: 10,
  },

  cardBody: {
    // paddingTop: 80,
    height: '100%',
    width: '100%',
    paddingTop: 70,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
  },

  img: {
    height: 150,
    width: 150,
    marginBottom: -70,
    zIndex: 1,
    borderRadius: 100,
    backgroundColor: 'rgba(255, 255, 255, 1)',
  },
});
