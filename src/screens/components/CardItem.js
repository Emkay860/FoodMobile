import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Avatar } from 'react-native-paper';

export default function CardItem() {
  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <Avatar.Image
          size={110}
          style={styles.img}
          source={require('./../../../assets/food.jpeg')}
        />
      </View>
      <View style={styles.cardBody}>
        <Text>
          baskancsncmmm
          jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppmmmmmmmmmmmmmmmmmmmmmmmmppppoooooooooooooooooommmcnck
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // borderWidth: 3,
    // borderColor: 'red',
    height: 250,
    width: 170,
    marginRight: 20,
    alignItems: 'center',
    padding: 10,
  },
  cardBody: {
    paddingTop: 80,
    // borderWidth: 2,
    // borderColor: 'green',
    height: 180,
    overflow: 'hidden',
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
    borderRadius: 5,
    zIndex: -1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 9,
  },
  imgContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
    width: 100,
    marginBottom: -90,
    borderRadius: 50,
    backgroundColor: 'rgba(255, 255, 255, 0)',
  },
  img: {
    borderRadius: 50,
    backgroundColor: 'rgba(255, 255, 255, 1)',
  },
});
