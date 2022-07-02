import React, { useEffect } from "react";
import {
    View,
    StyleSheet,
    ImageBackground,
    Image,
} from "react-native";
import { requestInit } from '@actions';
import {
    OtrixContainer, OtrixHeader, OtrixContent, OtrixDivider, OtrixAlert
} from '@component';
import { Input, Text, FormControl, Button } from "native-base"
import { connect } from 'react-redux';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { GlobalStyles, Colors, isValidEmail, isValidMobile, isValidpassword, isValidConfirmPassword } from '@helpers'
import { logfunction } from "@helpers/FunctionHelper";
import Fonts from "@helpers/Fonts";
import getApi from "@apis/getApi";
import { farm, splashlogo } from '@common';

function LoginRegisterOptionScreen(props) {
    useEffect(() => {

    }, []);

    return (
        <OtrixContainer customStyles={{ backgroundColor: Colors.white }}>

            {/* Header */}
            {/* <OtrixHeader customStyles={GlobalStyles.authHeader}>
                <Text style={[GlobalStyles.authtabbarText]}>GI Details Authorisation</Text>
            </OtrixHeader>
            <OtrixDivider size={'md'} /> */}

            {/* Content Start from here */}
            {/* <Image source={farm} resizeMode="contain" style={styles.image} /> */}
            <ImageBackground source={farm} resizeMode="cover" style={styles.bgimage}>

                <OtrixContent >
                    <OtrixDivider size={'md'} />
                    <Image source={splashlogo} resizeMode="contain" style={[styles.image, { width: wp('55%'), height: hp('10%') }]} />
                    <OtrixDivider size={'md'} />
                    <View style={styles.innerContainer}>


                        <OtrixDivider size={'md'} />
                        <Text style={styles.welcomeTxt}>Welcome</Text>
                        <Text style={styles.registerTxt}>Create new account or login to your existing account now!</Text>
                        <Button
                            size="md"
                            variant="outline"
                            colorScheme="secondary"
                            onPress={() => props.navigation.navigate('RegisterScreen')}
                        >
                            <Text style={[GlobalStyles.buttonText, { color: 'white' }]}>Sign Up</Text>

                        </Button>
                        <OtrixDivider size={'md'} />
                        <Button
                            size="md"
                            variant="solid"
                            bg={Colors.themeColor}
                            style={GlobalStyles.button}
                            onPress={() => props.navigation.navigate('LoginScreen')}
                        >
                            <Text style={GlobalStyles.buttonText}>Login Now</Text>
                        </Button>
                    </View>
                </OtrixContent>
            </ImageBackground>
        </OtrixContainer >
    )

}

function mapStateToProps({ params }) {
    return {}
}

export default connect(mapStateToProps)(LoginRegisterOptionScreen);

const styles = StyleSheet.create({
    registerView: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    registerTxt: {
        fontSize: wp('3.5%'),
        textAlign: 'center',
        fontFamily: Fonts.Font_Reguler,
        color: Colors.white,
        lineHeight: hp('2.5%'),
        marginVertical: hp('2.5%')
    },
    image: {
        resizeMode: 'cover',
        alignSelf: 'center',
        height: hp('25%'),
        width: wp('100%'),
    },
    signupTxt: {
        fontSize: wp('3.5%'),
        textAlign: 'right',
        fontFamily: Fonts.Font_Semibold,
        color: Colors.link_color
    },
    bgimage: {
        height: hp('100%'),
    },
    innerContainer: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0, 0.60)',
        padding: wp('5%'),
        marginTop: hp('8%'),
        borderRadius: 10
    },
    welcomeTxt: {
        fontSize: wp('6.5%'),
        textAlign: 'center',
        fontFamily: Fonts.Font_Semibold,
        color: Colors.white,
        marginVertical: hp('1%'),
        lineHeight: hp('3.5%'),
    }
});