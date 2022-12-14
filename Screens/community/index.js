import React, {useContext, useState, useEffect} from 'react';
import {StyleSheet, Dimensions} from 'react-native';

import img1 from '../assests/community1.png';
import img2 from '../assests/community2.png';
import img3 from '../assests/community3.png';
import img4 from '../assests/community4.png';
import img5 from '../assests/community5.png';
import img6 from '../assests/community6.png';
import img7 from '../assests/community7.png';
import img8 from '../assests/community8.png';
import img9 from '../assests/community9.png';
import img10 from '../assests/community10.png';
import img11 from '../assests/community11.png';
import img12 from '../assests/community12.png';
import img13 from '../assests/community13.png';
import CommunityBox from './CommunityBox';
import CommunityList from './CommunityList';
import {RFValue} from 'react-native-responsive-fontsize';

let logged = true;
let data = [
  {
    title: 'E Family',
    image: [img1, img10, img11, img6],
    description: 'E Family',
    about: "E-family is King's Temple Church's online family. Becoming an E-family member is as easy as joining online each week.\nThe church's online experience includes a live stream of worship services, interactive chat, and a team ready to join in prayer. You can now worship at the King's Temple from anywhere in the world!\nWe believe that there is no distance in spirit. We pray that your love and faith in God will increase through fellowship with us. Our wish for you is to be a prayerful and energetic Christian. We host a community connect called Life Group. It is a platform for like-minded people like us to come together, share our life stories, pray for one another, stand in faith, and celebrate God's goodness and faithfulness. It takes place every other Saturday.",
    message: '',
    phoneNumber: '',
  },
  {
    title: 'Bible College',
    image: [img13, img12],
    description: 'Bible College',
    about: `Dominion International Bible College is an initiative of The King’s Temple Church. \n\nBible college is a great way to learn more about the word of God and its teachings.\n\nThrough intensive study and discussion, students at Bible college can develop a deeper understanding of this ancient text and its impact on our lives.\n\nIn addition to offering academic training in biblical studies, We also provide practical training through internships, missions, and other opportunities. This combination of theoretical and practical instruction gives graduates a well-rounded foundation to serve God.\n\nIf you are interested in learning more about the Word of God, Consider enrolling in a Bible college today.`,
    message:
      'Hello, I would like to join Dominion International Bible College. Can you please help me with that?',
    phoneNumber: '919848949495',
  },
  {
    title: 'Life Groups',
    image: [img3, img2],
    description: 'Life Groups',
    about: `Life groups are the life of our church. They are the extension of this church. As our Senior Pastor says, “We are not a church with cells but we are a cell-based church”. This is to emphasize the importance of life groups in our church.\n\nThey help a big church in a big city feel like home. They are small gatherings in your neighborhood where you connect and make new friends, form relationships with other like-minded believers and grow together in the Word and share your ideas with others.\n\nFind a life group and join us for an amazing experience with God and make some new friends who encourage, inspire, and challenge you to bring out the best in you.\n\nIf you are new to this church or want to learn more about Life groups, visit us at any of our campuses or online and we would love to connect you to your nearest life group!`,
    message:
      'Hello, I would like to join a Life group. I want to know more about it. Can you please help me connect with a Life group co-ordinator?',
    phoneNumber: '919542472448',
  },
  {
    title: 'Teen x Youth',
    image: [img4, img7, img8],
    description: 'Teen x Youth',
    about: `Welcome to the Teen X Youth community! \n\nWe are a group of young people who come together to grow in our faith, build relationships, and serve others. \n\nTeen X Youth offers a variety of activities and events, including 1-1 conversations with our Youth leaders, Teen X Youth night which happens once a month, Life group which happens every week, and our annual Youth Conference “AWAKENING”  that we run every year. \n\nOur goal is to provide a supportive and welcoming environment where young people can share their hardships and realize that they aren’t alone -Jesus is right beside them.\n\nWe believe that being part of a community of faith is an important part of spiritual growth, and we are committed to helping our youth grow in their relationship with God and others. We invite you to join us and be a part of this.`,
    message:
      'Hello. I would like to become a member of Teen X Youth. I want to know more about it. Can you please help me walk through the process?',
    phoneNumber: '919542472448',
  },
  {
    title: 'Girl Tribe',
    image: [img5, img9],
    description: 'Girl Tribe',
    about: `Girl Tribe, an initiative of The king’s Temple Church is a community of Brave, Strong, and Fierce Women that are committed to living a fearless and passionate life.\n\nThere's just something special about a group of girls getting together. Maybe it's the fact that women are natural nurturers and caretakers, or maybe it's because we just know how to have a good time. Whatever the reason, there's no denying the power of the girl tribe.\n\nWhen you're part of a close-knit group of girls, you can count on them for anything – whether you need a shoulder to cry on or someone to help you celebrate your successes. They're always there for you, no matter what.\n\nAnd that's what makes the girl tribe special. Sure, you can rely on your family and friends for support, but there's something different about the bond between girls.\n\nWe believe in the power of discovering destiny and creating a world and lifestyle outside the norm.
        No filters are needed! You can be assured that you will always have a family you can count on.\n\nSo find your tribe TODAY!`,
    message:
      'Hello, I would like to join Girl Tribe. Can you please walk me through the process?',
    phoneNumber: '917569652539',
  },
];

const Community = ({navigation}) => {
  const [index, setIndex] = useState(-1);

  return (
    <>
      {!logged ? (
        navigation.navigate('Onboarding')
      ) : (
        <>
          {index == -1 ? (
            <CommunityList
              setIndex={setIndex}
              navigation={navigation}
              data={data}
            />
          ) : (
            <CommunityBox
              navigation={navigation}
              {...data[index]}
              setIndex={setIndex}
              msg={data[index].message}
              phoneNumber={data[index].phoneNumber}></CommunityBox>
          )}
        </>
      )}
    </>
  );
};

const {width} = Dimensions.get('window');
const boxWidth = width * 0.9;
const height = (width * 100) / 40;

const styles = StyleSheet.create({
  main: {flex: 1, backgroundColor: '#0F1013'},
  BigBox: {
    flex: 1,
    backgroundColor: '#0F1013',
    marginTop: height / 5,
    borderRadius: 24,
    paddingVertical: RFValue(10),
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: RFValue(100),
  },
  box: {
    width,
    flexDirection: 'column',
    alignItems: 'center',
  },
  header: {
    color: 'white',
    marginTop: RFValue(30),
    marginHorizontal: RFValue(16),
    fontSize: RFValue(22),
    fontFamily: 'Montserrat-Medium',
  },
  headerInfo: {
    color: 'white',
    marginTop: RFValue(10),
    marginHorizontal: RFValue(16),
    fontFamily: 'Montserrat-Bold',
    fontSize: RFValue(20),
  },
  container: {
    width,
    height: height / 3.5,
    resizeMode: 'cover',
    position: 'absolute',
    zIndex: -1,
    flex: 1,
  },
  scrollView: {
    width,
    height: height / 3.5,
  },
  images: {
    width,
    height: height / 3.5,
    resizeMode: 'contain',
  },
  pagination: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 30,
    alignSelf: 'center',
  },
  pagingText: {
    fontSize: RFValue(width / 30),
    backgroundColor: '#888',
    margin: RFValue(3),
    width: RFValue(9),
    height: RFValue(9),
    borderRadius: 50,
  },
  pagingActive: {
    fontSize: width / 30,
    width: RFValue(20),
    height: RFValue(9),
    backgroundColor: '#FFBE18',
    margin: RFValue(3),
    borderRadius: RFValue(50),
    transitionDuration: 10,
  },
  list: {
    backgroundColor: '#1E1E1E',
    borderRadius: 24,
    marginBottom: RFValue(110),
    paddingBottom: RFValue(20),
    width: boxWidth * 1.1,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardBox: {
    position: 'relative',
    height: width / 2,
    width: boxWidth,
    borderRadius: 24,
    paddingHorizontal: RFValue(14),
    paddingVertical: RFValue(5),
    displayflexDirection: 'column',
    justifyContent: 'flex-end',
    marginBottom: RFValue(15),
  },
  cardTextBox: {
    width: boxWidth * 0.85,
  },
  cardImage: {
    position: 'absolute',
    height: RFValue(width / 2.5),
    width: boxWidth,
    borderRadius: 20,
    zIndex: -1,
  },
  cardTextBoxheader: {
    textShadowOffset: {
      width: RFValue(2),
      height: RFValue(2),
    },
    textShadowRadius: 10,
    textShadowColor: '#333',
    fontSize: RFValue(18),
    color: '#FFFFFF',
    fontFamily: 'Montserrat-SemiBold',
  },
  cardBoxDescriptionText: {
    textShadowOffset: {
      width: RFValue(2),
      height: RFValue(2),
    },
    textShadowRadius: 10,
    textShadowColor: '#333',
    fontSize: RFValue(16),
    color: '#FFFFFF',
    fontFamily: 'Montserrat-Medium',
  },
  cardTextBoxDescription: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  DescriptionText: {
    fontSize: RFValue(15),
    fontFamily: 'Montserrat-Medium',
    color: '#FFFFFF',
    paddingHorizontal: RFValue(13),
    marginTop: RFValue(20),
  },
  submit: {
    marginTop: RFValue(10),
    borderRadius: RFValue(10),
    paddingHorizontal: RFValue(20),
    paddingVertical: RFValue(10),
    backgroundColor: 'grey',
    borderWidth: 1,
    width: width - 20,
  },
  textInfo: {color: 'white', alignSelf: 'center', fontSize: RFValue(14)},
  imagesAbout: {marginTop: RFValue(10), height: RFValue(width / 3)},
});

export {styles};

export default Community;
