import React from 'react';
import {
    View,
    Image,
    StyleSheet,
    Dimensions,
    Text,
    ScrollView,
    TouchableHighlight,
} from 'react-native';
import { Keyboard } from "react-native";

import img1 from '../assests/onboardScreen1.png';
import img2 from '../assests/onboardScreen2.png';
import img3 from '../assests/onboardScreen3.png';
import gobalStyle from '../styles/index';
import AutoScroll from "@homielab/react-native-auto-scroll";


const {width} = Dimensions.get('window');
const height = width * 100 / 70;

const images = [img1,img2,img3];
const infos = ['Access all our sermons and live stream.','Request for any church services with a single tap.','Join a community of people who care for you.'];


class Onboarding extends React.Component{


  constructor(props) {
    super(props);
    this.props.navigation.addListener('beforeRemove', (e) => {
      e.preventDefault();
    })
  }

    state = {
      active : 0,
    }

    change = ({nativeEvent}) => {
      const slide = nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width;
      if (slide !== this.state.active ){
        this.setState({active: slide});
      }
    }
    Login = (props) => {
      props.navigation.navigate('Login');
    }

    SignUp = (props) => {
      props.navigation.navigate('Registration');
    }

    render(){
        return (
            <View style={styles.main}>

              <View style = {styles.container}>
                <ScrollView
                  pagingEnabled
                  horizontal
                  onScroll={this.change}
                  showsHorizontalScrollIndicator = {false}
                  style = {styles.scrollView}
                >
                  {
                    images.map((image, index) => (
                      <Image
                      key={index}
                      source = {image}
                      style = {styles.images} />
                    ))
                  }
                </ScrollView>

                <View style = {styles.pagination}>
                  {
                    images.map((i,k) => (
                    <Text key={k} style={ k === this.state.active ? styles.pagingActive :  styles.pagingText} />
                    ))
                  }
                </View>
              </View>
              <View style = {styles.textAll}>
                {
                  <Text style = {styles.text}>{infos[this.state.active]}</Text>
                }
              </View>
              <View style = {styles.bottomButtons}>
              <TouchableHighlight
                style={[gobalStyle.btn1,{ padding:0}]}
                onPress={() => {this.SignUp(this.props);}}
                underlayColor="#fff">
                  <Text style={gobalStyle.submitText}>Join Us</Text>
              </TouchableHighlight>
              <View flexDirection='row' justifyContent='center' alignItems='center'>
                <Image source={require('../assests/white_separator.png')} style={{width: 150}} />
                <Text style = {styles.or}>OR</Text>
                <Image source={require('../assests/white_separator.png')} style={{width: 150}} />
              </View>
              <TouchableHighlight
                style={[gobalStyle.btn2,{ padding:0,marginTop:0}]}
                onPress={() => {this.Login(this.props);}}
                underlayColor="#fff">
                  <Text style={gobalStyle.submitText}>Login</Text>
              </TouchableHighlight>
              </View>
          </View>
        );
    }

}

const styles = StyleSheet.create({
    main:{
      flex: 1, backgroundColor:'black',
    },
    container: {
      marginTop: 0,
      width,
      height,
    },
    title: {
      textAlign: 'center',
      marginVertical: 8,
    },
    scrollView :{
      width,
      height,
    },
    images: {
      width,
      height,
      resizeMode: 'cover',
    },
    pagination : {
      flexDirection : 'row',
      position: 'absolute',
      bottom:5,
      alignSelf: 'center',
    },
    pagingText : {
      fontSize: (width / 30) ,
      backgroundColor: '#888' ,
       margin: 3,
       width:9,
       height:9,
       borderRadius:50,
      },
    pagingActive : {fontSize: (width / 30) ,width:20,height:9, backgroundColor: '#FFBE18', margin: 3,borderRadius:50,transitionDuration:10},
    text : {fontSize: 15, color : 'white',alignSelf : 'center', textAlign: 'center', marginTop: 8, marginHorizontal: 16, fontFamily: 'Montserrat-SemiBold'},
    contentContainer: {flex: 1},
    or : {alignSelf: 'center', color: '#888', fontSize: 16, padding: 10},
    bottomButtons : { 
      flex: 1, 
      flxexDirection: 'column', 
      marginHorizontal: 16,
      marginTop:20,
      justifyContent:'space-around',
    },
    textAll:{
      marginVertical:20,
      marginHorizontal:30,
      height:50
    },
  });


export default Onboarding;
