import React, { useEffect } from "react";
import {
    View,
    StyleSheet,
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
import { congratulation } from '@common';

function GIDetailsMessageScreen(props) {
    useEffect(() => {

    }, []);

    return (
        <OtrixContainer>

            {/* Header */}
            <OtrixHeader >
                <Text style={[GlobalStyles.authtabbarText]}>GI Details Authorisation</Text>
            </OtrixHeader>
            <OtrixDivider size={'md'} />

            {/* Content Start from here */}
            <OtrixContent>
                <OtrixDivider size={'md'} />
                <Image source={congratulation} resizeMode="contain" style={styles.image} />
                <OtrixDivider size={'md'} />
                <Text style={styles.registerTxt}> Congratulations your GI details have
                    been authenticated</Text>
                <OtrixDivider size={'md'} />
                <Button
                    size="md"
                    variant="solid"
                    bg={Colors.themeColor}
                    style={GlobalStyles.button}
                    onPress={() => props.navigation.navigate('LoginRegisterOptionScreen')}
                >
                    <Text style={GlobalStyles.buttonText}>Login/Register Now</Text>
                </Button>
                <OtrixDivider size={'md'} />
                {/* <Text style={styles.registerTxt}>Your location does not fall under
                    GI designated area</Text>
                <OtrixDivider size={'md'} />
                <Button
                    size="md"
                    variant="solid"
                    bg={Colors.themeColor}
                    style={GlobalStyles.button}
                    onPress={() => props.navigation.navigate('LoginRegisterOptionScreenVRP')}
                >
                    <Text style={GlobalStyles.buttonText}>Login/Register Now</Text>
                </Button> */}
            </OtrixContent>
        </OtrixContainer >
    )

}

function mapStateToProps({ params }) {
    return {}
}

export default connect(mapStateToProps)(GIDetailsMessageScreen);

const styles = StyleSheet.create({
    registerView: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    registerTxt: {
        fontSize: wp('6%'),
        textAlign: 'center',
        fontFamily: Fonts.Font_Reguler,
        color: Colors.secondry_text_color,
        lineHeight: hp('3.5%')
    },
    image: {
        resizeMode: 'contain',
        alignSelf: 'center',
        height: hp('25%'),
        width: wp('45%'),
    },
    signupTxt: {
        fontSize: wp('3.5%'),
        textAlign: 'right',
        fontFamily: Fonts.Font_Semibold,
        color: Colors.link_color
    },
});