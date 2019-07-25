import React, { Component } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';

const news_items = [
  {
    id: 1,
    title: 'The HTML Handbook',
    summary: 'HTML is the foundation of the marvel called the Web. Discover all you need to know about it in this handy handbook!',
    image: require('../images/amanda-phung-1281331-unsplash.jpg'),
  },
  {
    id: 2,
    title: 'Angular RxJs In-Depth',
    summary: "In this tutorial, we'll learn to use the RxJS 6 library with Angular 6 or Angular 7...",
    image: require('../images/daniil-silantev-318853-unsplash.jpg')
  },
  {
    id: 3,
    title: 'How to Create Code Profiles in VSCode',
    summary: 'This post piggybacks off of the work done by @avanslaars who is a fellow instructor at egghead.io....',
    image: require('../images/vincent-van-zalinge-38358-unsplash.jpg')
  },
];

export default class Feed extends Component {
	render() {
		return (
			<View style={styles.container}>

        <FlatList
          data={news_items}
          keyExtractor={(item, index) => item.id.toString()}
          renderItem={this.renderItem}
        />
			</View>
		);
	}
  //

  renderItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={this.goToNews}>
        <View style={styles.news_item}>
          <View style={styles.news_text}>
            <View style={styles.text_container}>
                <Text style={styles.title}>{item.title}</Text>
                <Text>{item.summary}</Text>
            </View>
          </View>
          <View style={styles.news_photo}>
            <Image source={item.image} style={styles.photo} />
          </View>
        </View>
      </TouchableOpacity>
    );
  }
  //


  goToNews = () => {

  }
}
//

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  news_item: {
    flex: 1,
    flexDirection: 'row',
    paddingRight: 20,
    paddingLeft: 20,
    paddingTop: 20,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#E4E4E4'
  },
  news_text: {
    flex: 2,
    flexDirection: 'row',
    padding: 15
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000',
    fontFamily: 'georgia'
  },
  news_photo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  photo: {
    width: 120,
    height: 120
  }
});