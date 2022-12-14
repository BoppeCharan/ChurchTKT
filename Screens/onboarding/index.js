import React, {useState, useEffect} from 'react';
import {
  View,
  Image,
  StyleSheet,
  Dimensions,
  Text,
  ScrollView,
  TouchableHighlight,
  SafeAreaView,
} from 'react-native';
import img1 from '../assests/onboardScreen1.png';
import img2 from '../assests/onboardScreen2.png';
import img3 from '../assests/onboardScreen3.png';
import gobalStyle from '../styles/index';
import {RFValue} from 'react-native-responsive-fontsize';
import AsyncStorage from '@react-native-async-storage/async-storage';

const {width} = Dimensions.get('window');
const height = (width * 100) / 70;

const images = [img1, img2, img3];
const infos = [
  'Access all our sermons and live stream.',
  'Request for any church services with a single tap.',
  'Join a community of people who care for you.',
];

const Onboarding = ({navigation}) => {
  useEffect(() => {
    navigation.addListener('beforeRemove', e => {
      e.preventDefault();
    });
  }, []);

  const [active, setActive] = useState(0);

  const change = ({nativeEvent}) => {
    const slide =
      nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width;
    if (slide !== active) {
      setActive(slide);
    }
  };
  Login = () => {
    navigation.navigate('Login');
  };

  SignUp = () => {
    navigation.navigate('Registration');
  };

  const BottomNavigate = () => {
    AsyncStorage.setItem('guestLogin', JSON.stringify(true))
      .then(() => {
        console.log('call in setItem');
        navigation.navigate('BottomTabs');
      })
      .catch(e => console.log(e))
      .finally(() => console.log('navigate'));
  };

  return (
    <SafeAreaView style={styles.main}>
      <SafeAreaView style={styles.container}>
        <ScrollView
          pagingEnabled
          horizontal
          onScroll={change}
          showsHorizontalScrollIndicator={false}
          style={styles.scrollView}>
          {images.map((image, index) => (
            <Image key={index} source={image} style={styles.images} />
          ))}
        </ScrollView>

        <View style={styles.pagination}>
          {images.map((i, k) => (
            <Text
              key={k}
              style={k === active ? styles.pagingActive : styles.pagingText}
            />
          ))}
        </View>
      </SafeAreaView>
      <SafeAreaView style={styles.textAll}>
        {<Text style={styles.text}>{infos[active]}</Text>}
      </SafeAreaView>
      <SafeAreaView style={styles.bottomButtons}>
        <TouchableHighlight
          style={[gobalStyle.btn1, {padding: RFValue(0)}]}
          onPress={() => {
            SignUp();
          }}
          underlayColor="#fff">
          <Text style={gobalStyle.submitText}>Join Us</Text>
        </TouchableHighlight>
        <SafeAreaView
          flexDirection="row"
          justifyContent="center"
          alignItems="center">
          <Image
            source={require('../assests/white_separator.png')}
            style={{width: 150}}
          />
          <Text style={styles.or}>OR</Text>
          <Image
            source={require('../assests/white_separator.png')}
            style={{width: 150}}
          />
        </SafeAreaView>
        <TouchableHighlight
          style={[
            gobalStyle.btn2,
            {padding: RFValue(0), marginTop: RFValue(0)},
          ]}
          onPress={() => {
            BottomNavigate();
          }}
          underlayColor="#fff">
          <Text style={gobalStyle.submitText}>Continue</Text>
        </TouchableHighlight>
      </SafeAreaView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'black',
  },
  container: {
    marginTop: RFValue(0),
    width,
    height,
  },
  title: {
    textAlign: 'center',
    marginVertical: RFValue(8),
  },
  scrollView: {
    width,
    height,
  },
  images: {
    width,
    height,
    resizeMode: 'cover',
  },
  pagination: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 5,
    alignSelf: 'center',
  },
  pagingText: {
    fontSize: RFValue(width / 30),
    backgroundColor: '#888',
    margin: RFValue(3),
    width: RFValue(8),
    height: RFValue(8),
    borderRadius: RFValue(50),
  },
  pagingActive: {
    fontSize: RFValue(width / 30),
    width: RFValue(18),
    height: RFValue(8),
    backgroundColor: '#FFBE18',
    margin: RFValue(3),
    borderRadius: 50,
    transitionDuration: 10,
  },
  text: {
    fontSize: RFValue(14),
    color: 'white',
    alignSelf: 'center',
    textAlign: 'center',
    marginTop: RFValue(5),
    marginHorizontal: RFValue(5),
    fontFamily: 'Montserrat-SemiBold',
  },
  contentContainer: {flex: 1},
  or: {
    alignSelf: 'center',
    color: '#888',
    fontSize: RFValue(14),
    padding: RFValue(10),
  },
  bottomButtons: {
    flex: 1,
    flxexDirection: 'column',
    marginHorizontal: RFValue(16),
    marginTop: RFValue(2),
    justifyContent: 'space-around',
  },
  textAll: {
    marginVertical: RFValue(15),
    marginHorizontal: RFValue(30),
    height: RFValue(45),
  },
});

export default Onboarding;
