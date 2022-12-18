/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import {
    Dropdown,
}
    from 'react-native-material-dropdown';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, ScrollView, SafeAreaView, KeyboardAvoidingView } from 'react-native';

import { styles as Input } from '../profile/AccountDetails';
import ModalDropdown from 'react-native-modal-dropdown';

import FuneralService from './FuneralService';
import CelebrateBirthday from './CelebrateBirthday';

import ChildDedication from './ChildDedication';
import HouseDedication from './HouseDedication';
import WaterBaptism from './WaterBaptism';
import ThanksGiving from './ThanksGiving';
import MemorialServices from './MemorialServices';

import RequestSent from './RequestSent';
import gobalStyle from '../../styles/index';
import Icon, { Icons } from '../Icons'



const { width } = Dimensions.get('window');
const RequestForm = ({ navigation }) => {

    const options = [
        'Request Funeral Services',
        'Celebrate Birthday',
        'Child Dedications',
        'House Dedications',
        'Water Baptism',
        'Thanks Giving',
        'Memorial Services'
    ];
    const optionIcons = [
        { type: Icons.Octicons, name: "home", },
        { type: Icons.FontAwesome5, name: "birthday-cake", },
        { type: Icons.MaterialCommunityIcons, name: "human-male-child", },
        { type: Icons.FontAwesome5, name: "home", },
        { type: Icons.MaterialCommunityIcons, name: "water-plus", },
        { type: Icons.AntDesign, name: "heart", },
        { type: Icons.MaterialCommunityIcons, name: "candle", },
    ];

    const [index, setIndex] = useState(0);
    const [show, setShow] = useState(false);
    console.log(index);


    return (
    <KeyboardAvoidingView
    keyboardShouldPersistTaps='never'
    behavior= {Platform.OS=='ios'?"padding":'height'}
    style={{flex:1}}
    >

    <SafeAreaView style={{ backgroundColor: '#0F0F0F', flex: 1, flexDirection: 'column', alignItems: 'center', paddingBottom: 30 }}>

        <TouchableOpacity
            // provide navigate path
            onPress={() => navigation.navigate('Explore')}
            style={{ alignSelf: 'flex-start' }}
        >

            <SafeAreaView style={[gobalStyle.nav, { alignSelf: 'flex-start' }]}>
                <SafeAreaView style={gobalStyle.nav_image}>
                    <Icons.MaterialIcons name="arrow-back-ios" size={24} color="white" />
                </SafeAreaView>
                <Text style={gobalStyle.nav_header}>Request Forms</Text>
            </SafeAreaView>
        </TouchableOpacity>


        <SafeAreaView style={{ flexDirection: 'column', alignItems: 'center' }}>
            <Text style={{ color: 'white', marginVertical: 10, alignSelf: 'flex-start', fontSize: 16, fontFamily: 'Montserrat-Medium' }}>Choose the Service</Text>
            <ModalDropdown
                options={options}
                style={[styles.input]}
                defaultIndex={index}
                defaultValue={'Choose the Service'}
                textStyle={{ color: 'white', marginVertical: 10, fontSize: 16, fontFamily: 'Montserrat-Medium', marginStart: 10 }}
                dropdownStyle={styles.dropdownStyle}
                isFullWidth={true}
                borderRadius={5}
                dropdownTextStyle={styles.dropdownTextStyle}
                dropdownTextHighlightStyle={styles.dropdownTextHighlightStyle}
                onSelect={(e) => {
                    setIndex(e)
                }}


                renderRow={(option, Index, isSelected) => {
                    const item = optionIcons[Index];
                    return (


                        <SafeAreaView
                            style={[
                                {
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    paddingVertical: 10,
                                    paddingHorizontal: 5,
                                    backgroundColor: '#0F0F0F',
                                    borderWidth: 1,
                                    borderRadius: 3
                                }
                            ]}
                        >
                            <Icon
                                type={item?.type}
                                name={item?.name}
                                size={22}
                                style={[
                                    { padding: 3 },
                                    !isSelected
                                        ?
                                        styles.dropdownTextStyle
                                        :
                                        styles.dropdownTextHighlightStyle
                                ]
                                }
                            />

                            <Text
                                style={[
                                    { marginLeft: 10, fontSize: 16 }
                                    ,
                                    !isSelected
                                        ?
                                        styles.dropdownTextStyle
                                        :
                                        styles.dropdownTextHighlightStyle
                                ]
                                }>{option}</Text>
                        </SafeAreaView>

                    )

                }}


            />
        </SafeAreaView>


        <SafeAreaView style={{flex:2, marginTop: (100/5), paddingVertical: 8, alignItems: 'center', flexDirection: 'column', backgroundColor: '#161616', borderRadius: 20}}>
            <Text style={[{ color: 'white', marginStart: 15, marginTop: 15, padding: 2, fontSize: 16, fontFamily: 'Montserrat-Medium' }, styles.texts]}>We need some details</Text>

            <GetForm index={index} setShow={setShow} />
            {
                show &&
                <RequestSent setShow={setShow} />
            }

        </SafeAreaView>
    </SafeAreaView>
    </KeyboardAvoidingView>

    );
};


const GetForm = ({ index, setShow }) => {

    if (index === 0) {
        return <FuneralService setShow={setShow} />;
    }

    if (index === 1) {
        return <CelebrateBirthday setShow={setShow} />;
    }


    if (index === 2) {
        return <ChildDedication setShow={setShow} />;
    }

    if (index === 3) {
        return <HouseDedication setShow={setShow} />;
    }
    if (index === 4) {
        return <WaterBaptism setShow={setShow} />;
    }
    if (index === 5) {
        return <ThanksGiving setShow={setShow} />;
    }
    if (index === 6) {
        return <MemorialServices setShow={setShow} />;
    }
};



const boxWidth = width * 0.9;

const styles = StyleSheet.create({
    chatSupportBtn: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: '#F79D16',
        borderRadius: 4,
        borderWidth: 0.2,
        borderColor: '#fff',
        textTransform: 'capitalize',
        textTransform: 'uppercase',
        width: (width * 0.92),
    },
    loginText: {
        fontSize: 17,
        fontFamily: 'Montserrat-Medium',
        textAlign: 'center',
        color: 'white',
    },
    input: {
        borderColor: '#343739',
        borderWidth: 1,
        color: 'white',
        width: (width * 0.90),
        padding: 4,
        marginVertical: 5,
        fontFamily: 'Montserrat-Medium'
    },
    dropdownTextStyle: {
        color: '#808080',
        backgroundColor: '#0F0F0F',
        borderColor: '#343739',
        borderWidth: 0,
        fontFamily: 'Montserrat-Medium'
    },
    dropdownTextHighlightStyle: {
        color: 'white',
    },
    texts: {
        width: (width * 0.92),
    },
    dropdownStyle: {
        height: 370,
        backgroundColor: '#000',
    }
});

export { styles };

export default RequestForm;
