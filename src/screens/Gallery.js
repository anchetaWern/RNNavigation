import React, { Component } from 'react';
import { View, Text, FlatList, Image, Dimensions, StyleSheet } from 'react-native';

const { width } = Dimensions.get('window');
const base_width = width / 2;

const images = [
  {
    id: 1,
    src: require('../images/blake-richard-verdoorn-20063-unsplash.jpg')
  },
  {
    id: 2,
    src: require('../images/casey-horner-487085-unsplash.jpg')
  },
  {
    id: 3,
    src: require('../images/sacha-styles-XK7thML3zEQ-unsplash.jpg')
  },
  {
    id: 4,
    src: require('../images/eberhard-grossgasteiger-1036384-unsplash.jpg')
  },
  {
    id: 5,
    src: require('../images/justin-kauffman-449060-unsplash.jpg')
  },
  {
    id: 6,
    src: require('../images/vincent-guth-182001-unsplash.jpg')
  }
];


export default class Gallery extends Component {

	render() {
		return (
			<View style={styles.container}>
        <FlatList
          data={images}
          keyExtractor={(item, index) => item.id.toString()}
          numColumns={2}
          renderItem={this.renderImage}
        />
			</View>
		);
	}
  //

  renderImage = ({ item }) => {
    return (
      <Image
        source={item.src}
        style={{width: base_width, height: 250}}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});