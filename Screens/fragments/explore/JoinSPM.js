import React from "react";
import { View, Image, Dimensions, ScrollView, Text, TextInput, TouchableHighlight, TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";
import gobalStyle from '../../styles/index';
import { AppContext } from '../../../context';
import { useState, useContext, useEffect } from "react";
import ImageBackUp from '../../assests/icons/back.png';
import { sendSPMFrom } from '../../api/requestForms'
import RadioButtonRN from 'radio-buttons-react-native';

const JoinSPM = ({ navigation }) => {
    const { user } = useContext(AppContext);

    const [data, setData] = useState({
        userName: '',
        fatherName: '',
        "userId": user.userId,
        "gender": "",
        "amount": 0
    });


    const genderData = [
        {
            label: 'Male'
        },
        {
            label: 'Female'
        }
    ];

    const change = (name, value) => {
        setData({ ...data, [name]: value });
    };
    const submit = () => {
        console.log(data);
        sendSPMFrom({ ...data }).then(() => {
            alert("Join the spm")
            setData({
                userName: '',
                fatherName: '',
                userId: user.userId,
                gender: "",
                amounts: 0
            })
            navigation.navigate("Spm",{isJoin:true})
        }).catch((e) => {
            alert("Something went wrong")
        })
    };


    return (
        <View style={gobalStyle.main}>
            <TouchableOpacity
                style={gobalStyle.nav}
                // provide navigate path
                onPress={() => navigation.navigate('Explore')}
            >
                <Image source={ImageBackUp} style={gobalStyle.nav_image} />
                <Text style={gobalStyle.nav_header}>Join SPM</Text>
            </TouchableOpacity>

            <View style={[styles.box]}>


                <Text style={styles.boldText}>
                    We need some details
                </Text>

                <Text style={styles.lightText}>
                    Please provide us some of your information to be a part of SPM
                </Text>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}>

                    <TextInput style={styles.input}
                        underlineColorAndroid="transparent"
                        placeholder="Your Name"
                        placeholderTextColor="#808080"
                        autoCapitalize="none"
                        name="userName"
                        value={data.userName}
                        onChangeText={(e) => change("userName", e)}
                    />

                    <TextInput style={styles.input}
                        underlineColorAndroid="transparent"
                        placeholder="Father's Name"
                        placeholderTextColor="#808080"
                        autoCapitalize="none"
                        name="fatherName"
                        value={data.fatherName}
                        onChangeText={(e) => change("fatherName", e)}
                    />

                    {/* // <TextInput style={styles.input}
                    //     underlineColorAndroid="transparent"
                    //     placeholder="Gender"
                    //     placeholderTextColor="#808080"
                    //     autoCapitalize="none"
                    //     name="gender"
                    //     value={data.gender}
                    //     onChangeText={(e) => change("gender", e)}
                    // /> */}

<Text style={[styles.lightText, marginBottom= 3]}>
                    Gender
                </Text>


                    <RadioButtonRN
                    data={genderData}
                    selectedBtn={(e) => change("gender",e.label)}
                    style={{marginStart: 5}}
                    activeColor={'#CF820E'}
                    inactiveColor={'#181818'}
                    boxStyle={{backgroundColor: '#1E1E1E', borderColor: '#1E1E1E'}}
                    textStyle={{fontFamily: 'Montserrat-Medium', fontSize: 16, color: 'white'}}
                    />

                    {/* <Text style={{fontFamily: 'Montserrat-Medium', fontSize: 16, margin:10, color: 'white'}}>Gender</Text> */}
                    <Text style={[styles.lightText, { marginTop: 30 }]}>Enter the amount you want to commit: </Text>

                    <TextInput style={styles.input}
                        underlineColorAndroid="transparent"
                        placeholder="Amount (in INR)"
                        placeHolderTextColor="#989898"
                        keyboardType="number-pad"
                        placeholderTextColor="white"
                        autoCapitalize="none"
                        name="amount"
                        onChangeText={(e) => change("amount", parseInt(e))}
                    />
                </ScrollView>

                <TouchableHighlight
                    style={gobalStyle.btn_abs}
                    onPress={() => { submit(); }}
                >
                    <Text style={[gobalStyle.submitText]}>JOIN</Text>
                </TouchableHighlight>
            </View>
        </View>
    )
}

const { width } = Dimensions.get('window');
const boxWidth = width * 0.9;
const styles = StyleSheet.create({
    input: {
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 5,
        marginHorizontal: 10,
        marginStart: 20,
        marginEnd: 20,
        borderColor: '#343739',
        borderWidth: 1,
        paddingHorizontal: 10,
        color: 'white',
        borderRadius: 10,
        borderWidth: 2,
        fontSize: 16,
        fontFamily: 'Montserrat-Regular'
    },
    box: {
        width,
        backgroundColor: '#1E1E1E',
        flexDirection: 'column',
        borderRadius: 20,
        flex: 1,
        marginTop: 10,
        paddingTop: 10,
    },
    boldText: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 18,
        color: 'white',
        margin: 20,
    },
    lightText: {
        fontFamily: 'Montserrat-Medium',
        fontSize: 16,
        margin: 20,
        marginBottom: 10,
        color: '#989898',
    },
    normalText: {

    }
})

export { styles };

export default JoinSPM;