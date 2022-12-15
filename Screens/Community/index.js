import React, {useContext,useState} from 'react';
import {
    StyleSheet,
    Dimensions
} from 'react-native';

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
import CommunityBox from './CommunityBox';
import CommunityList from './CommunityList';
import ArrowImage from '../assests/icons/communityCardIcon.png'


let logged = true;
let data=[
    {
        'title':'E Family',
        'image':[img1,img10,img11,img6],
        'description':'Be a part of our Online Family',
        'about':`There's nothing like the feeling of giving to someone in need and knowing that you’re making a difference in their life. Limitless Life Foundation is all about using our resources to help those who are in need.\n\nIn 2013, we The King’s Temple made up our hearts to start helping and serving the needy in a significant way. We want to make a genuine difference in the communities, villages, towns, and cities where God has opened doors for us.\n\nIt is with this heart of loving people as Christ loved us, we have launched the 'LIMITLESS LOVE FOUNDATION". The vision of LLF (Limitless Love Foundation) is to love & empower the underprivileged.\n\nOur mission statement for LLF is "Loving People, Changing Lives" and as a ministry, we have always been on a mission of changing the lives of people with the Word of God, but now we are taking it to another level. We want to show in action the love of God by giving, serving, praying, blessing, and doing good to others.It is also a great way to show our love for others and demonstrate our faith in action.\n\nWhen we give, we are expressing our desire to see the world become a better place – and that is an incredibly powerful thing.`
    },
    {
        'title':'Bible College',
        'image':[img12],
        'description':'Learn the Holy Bible',
        'about':`Dominion International Bible College is an initiative of The King’s Temple Church. \n\nBible college is a great way to learn more about the word of God and its teachings.\n\nThrough intensive study and discussion, students at Bible college can develop a deeper understanding of this ancient text and its impact on our lives.\n\nIn addition to offering academic training in biblical studies, We also provide practical training through internships, missions, and other opportunities. This combination of theoretical and practical instruction gives graduates a well-rounded foundation to serve God.\n\nIf you are interested in learning more about the Word of God, Consider enrolling in a Bible college today.`
    },
    {
        'title':'Life Groups',
        'image':[img3,img2],
        'description': 'Dominion Bible College',
        'about':`Life groups are the life of our church. They are the extension of this church. As our Senior Pastor says, “We are not a church with cells but we are a cell-based church”. This is to emphasize the importance of life groups in our church.\n\nThey help a big church in a big city feel like home. They are small gatherings in your neighborhood where you connect and make new friends, form relationships with other like-minded believers and grow together in the Word and share your ideas with others.\n\nFind a life group and join us for an amazing experience with God and make some new friends who encourage, inspire, and challenge you to bring out the best in you.\n\nIf you are new to this church or want to learn more about Life groups, visit us at any of our campuses or online and we would love to connect you to your nearest life group!`
    },
    {
        'title':'Teen x Youth',
        'image':[img4,img7,img8],
        'description':'Dominion Bible College',
        'about':`The King’s Kids is an Initiative of The king’s Temple Church\n\nwe focus on teaching children the basic tenets of Christianity in a fun and exciting way. Instilling these values in young hearts will lead to a lifetime of faithful service to God.\n\nWe start each week with an energetic opening song, followed by a Bible story. The story is always related to the theme for that particular week and is backed with crafts, games, and other activities.\n\nOur goal is to create an environment where your child can feel comfortable asking questions, engaging with other children, and building a personal relationship with JESUS.We would love to have your child join us on this journey of faith!`
    },
    {
        'title':'Girl Tribe',
        'image':[img5,img9],
        'description':'Dominion Bible College',
        'about':`Girl Tribe, an initiative of The king’s Temple Church is a community of Brave, Strong, and Fierce Women that are committed to living a fearless and passionate life.\n\nThere's just something special about a group of girls getting together. Maybe it's the fact that women are natural nurturers and caretakers, or maybe it's because we just know how to have a good time. Whatever the reason, there's no denying the power of the girl tribe.\n\nWhen you're part of a close-knit group of girls, you can count on them for anything – whether you need a shoulder to cry on or someone to help you celebrate your successes. They're always there for you, no matter what.\n\nAnd that's what makes the girl tribe special. Sure, you can rely on your family and friends for support, but there's something different about the bond between girls.\n\nWe believe in the power of discovering destiny and creating a world and lifestyle outside the norm.
        No filters are needed! You can be assured that you will always have a family you can count on.\n\nSo find your tribe TODAY!`
    }
];

const Community = ({navigation}) => {

    const [index,setIndex]=useState(-1);

    return (
        <>
        {
            !logged 
            ? 
            navigation.navigate('Onboarding') 
            : (
                <>
                    {
                        index==-1
                        ?   
                        <CommunityList setIndex={setIndex} navigation={navigation} data={data}/>
                        :
                        <CommunityBox navigation={navigation} {...data[index]} setIndex={setIndex}></CommunityBox>
                    }
                </>
            )
        }
        </>
    )
}




const {width} = Dimensions.get('window');
const boxWidth=width*0.9;
const height = width * 100 / 40;

const styles = StyleSheet.create({
    main : {flex: 1, backgroundColor:'#0F1013'},
    BigBox : {
        flex: 1,
        backgroundColor:'#0F1013',
        marginTop:(height/5),
        borderRadius: 24,
        paddingVertical:10,
        flexDirection:'column',
        alignItems: 'center',
        marginBottom:100,
    },
    box:{
        width,
        flexDirection:'column',
        alignItems: 'center'
    },
    header : {
        color: 'white',
        marginTop: 30, 
        marginHorizontal: 16,
        fontSize: 22,
        fontFamily: 'Montserrat-Medium'
    },
    headerInfo : {
        color: 'white',
        marginTop: 10,
        marginHorizontal: 16, 
        fontFamily: 'Montserrat-Bold',
        fontSize: 20,
    },
    container: {
        width,
        height:(height/3.5),
        resizeMode: 'cover',
        position: 'absolute',
        zIndex:-1,
        flex:1,
    },
    scrollView :{
        width, 
        height:(height/3.5),
    },
    images: {
        width,
        height:(height/3.5),
        resizeMode: 'cover',
    },
    pagination : {
        flexDirection : 'row',
        position: 'absolute',
        bottom:30,
        alignSelf: 'center',
    },
    pagingText : {
        fontSize: (width / 30) ,
        backgroundColor: '#888',
        margin: 3,
        width:9,
        height:9,
        borderRadius:50,
    },
    pagingActive : {
        fontSize: (width / 30),
        width:20,
        height:9,
        backgroundColor: '#FFBE18', 
        margin: 3,
        borderRadius:50,
        transitionDuration:10
    },
    list: { 
        backgroundColor:'#0F0F0F',
        borderRadius: 24,
        marginBottom: 100,
        paddingBottom:20,
        width:boxWidth,
        flex:1,
        flexDirection:'column',
        justifyContent: 'center',
        alignItems:'center',
    },
    cardBox: {
        position:'relative',
        height:width/2,
        width:boxWidth,
        borderRadius: 24,
        padding:20,
        displayflexDirection:'column',
        justifyContent: 'flex-end',
        marginBottom:15,
    },
    cardTextBox:{
        width:boxWidth*0.85
        ,
    },
    cardImage:{
        position:'absolute',
        height:width/2,
        width:boxWidth,
        borderRadius: 24,
        zIndex:-1
    },
    cardTextBoxheader:{
        textShadowOffset: {
            width: 2, height: 2
        },
        textShadowRadius: 10,
        textShadowColor: '#333',
        fontSize: 18,
        color:'#FFFFFF',
        fontFamily: 'Montserrat-SemiBold'
    },
    cardBoxDescriptionText:{
        textShadowOffset: {
            width: 2, height: 2
        },
        textShadowRadius: 10,
        textShadowColor: '#333',
        fontSize: 16,
        color:'#FFFFFF',
        fontFamily: 'Montserrat-Medium'
    },
    cardTextBoxDescription:{
        display:'flex',
        flexDirection:'row',
        justifyContent: 'space-between',
    },
    DescriptionText:{
        fontSize: 15,
        fontFamily: 'Montserrat-Medium',
        color:'#FFFFFF',
        paddingHorizontal:13,
        marginTop:20
    },
    submit : {
        marginTop: 10,
        borderRadius: 10,
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: 'grey',
        borderWidth: 1,
        width:width-20
    },
    textInfo: {color: 'white', alignSelf: 'center', fontSize: 14},
    imagesAbout:{marginTop:15,height:width/3}
});

export {styles};

export default Community;