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
      <Card style={styles.cardBody} elevation={8} mode="elevated">
        <Avatar.Image
          size={130}
          style={styles.img}
          source={require('./../../../assets/food.jpeg')}
        />
        <Card.Content>
          <Title style={styles.titleStyle}>Chicken Pasta</Title>
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
    width: 180,
    marginRight: 10,
    alignItems: 'center',
    padding: 10,
    marginBottom: 20,
  },

  cardBody: {
    height: '80%',
    width: '100%',
    paddingTop: 50,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
    borderRadius: 8,
    marginTop: 70,
  },

  img: {
    height: 120,
    width: 120,
    marginTop: -110,
    marginLeft: 4,
    borderRadius: 100,
    backgroundColor: 'rgba(255, 255, 255, 1)',
  },
  currency: {
    fontSize: 8,
    color: '#FA9905',
  },
  price: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  btnOder: {
    paddingLeft: 8,
    paddingRight: 8,
  },
  titleStyle: {
    fontSize: 14,
    paddingTop: 10,
    // color: 'red',
  },
});
