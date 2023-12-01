import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';

import {
  Button
} from "react-native-paper";
const screenWidth = Dimensions.get('window').width;
const images = [
  'https://images.unsplash.com/photo-1513721032312-6a18a42c8763?w=152&h=152&fit=crop&crop=faces',
  'https://images.unsplash.com/photo-1511765224389-37f0e77cf0eb?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1497445462247-4330a224fdb1?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1502630859934-b3b41d18206c?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1515023115689-589c33041d3c?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1504214208698-ea1916a2195a?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1515814472071-4d632dbc5d4a?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1511407397940-d57f68e81203?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1518481612222-68bbe828ecd1?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1505058707965-09a4469a87e4?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1423012373122-fff0a5d28cc9?w=125&h=125&fit=crop',
];

const localImg = require('./assets/snack-icon.png');
export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Image source={localImg} style={styles.image} />
          <View >
            <View style={styles.information}>
              <Text style={styles.text}>Posts</Text>
              <Text style={styles.text}>Followers</Text>
              <Text style={styles.text}>Following</Text>
            </View>
            <View style={styles.followers}>
              <Text>20</Text>
              <Text>2450</Text>
              <Text>115</Text>
            </View>
            <Button color="white" style={styles.button}>Edit Profile</Button>
          </View>
        </View>
        <View style={styles.body}>
          {
            images.map((item,index)=>{
              return (
                <Image key={index} source={{uri: item}} style={styles.post}/>          
              )
            } )
          }
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flex: 0.4,
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "flex-end",
    marginBottom: 10,
  },
  body: {
    flex: 1,
    backgroundColor: "white",
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "center"
  },
  image: {
    width: 90,
    height: 90,
    borderRadius: 45,
    marginLeft: 25,
    backgroundColor: "pink",
  },
  information: {
    marginLeft: 30,
    width: 225,
    flexDirection: "row",
    justifyContent: 'space-between', 
   },
   text: {
     fontWeight: 900,
   },
   followers: {
    marginLeft: 30,
    width: 225,
    flexDirection: "row",
    justifyContent: 'space-between', 
    paddingLeft: 7,
    paddingRight: 20,
   },
   button: {
     backgroundColor: "grey",
     width: 175,
     marginTop: 10,
    marginLeft: 50,
   },
   post:{
     marginTop:3,
     marginBottom:3,
     marginLeft:3,
     marginRight:3,
     width: 90,
     height:90,
   }
  
  
});