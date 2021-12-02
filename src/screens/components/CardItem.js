import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import {
  Avatar,
  Button,
  Card,
  Title,
  Paragraph,
  Caption,
} from 'react-native-paper';

export default function CardItem() {
  return (
    <View style={styles.container}>
      <Avatar.Image
        size={150}
        style={styles.img}
        source={require('./../../../assets/food.jpeg')}
      />
      <Card style={styles.cardBody} elevation={8} mode="elevated">
        <Card.Content>
          <Title>Chicken Pasta</Title>
          <Caption>Caption</Caption>
          <Paragraph style={styles.price}>
            <Text style={styles.currency}>NGN: </Text>1,345.99
          </Paragraph>
        </Card.Content>
        <Card.Actions>
          <Button
            mode="contained"
            color="#FA9905"
            labelStyle={{ color: 'white' }}
            style={styles.btnOder}
          >
            Order
          </Button>
        </Card.Actions>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 230,
    marginRight: 10,
    alignItems: 'center',
    padding: 10,
    marginBottom: 20,
  },

  cardBody: {
    height: '80%',
    width: '100%',
    paddingTop: 90,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
    borderRadius: 8,
  },

  img: {
    height: 150,
    width: 150,
    marginBottom: -90,
    zIndex: 1,
    borderRadius: 100,
    backgroundColor: 'rgba(255, 255, 255, 1)',
  },
  currency: {
    fontSize: 10,
    color: '#FA9905',
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  btnOder: {
    paddingLeft: 8,
    paddingRight: 8,
  },
});
