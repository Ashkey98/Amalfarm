import React from "react";
import { requestInit } from '@actions';
import {
    OtrixContainer, OtrixHeader, OtrixContent, OtrixDivider
} from '@component';
import { TouchableOpacity, View, ImageBackground, StyleSheet } from 'react-native';
import { Input, Text, FormControl, Button } from "native-base"
import { connect } from 'react-redux';
import { GlobalStyles, Colors } from '@helpers'
import { forgot } from '@common';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Fonts from "../helpers/Fonts";

function ForgotPasswordScreen(props) {
    const [formData, setData] = React.useState({});

    return (
        <OtrixContainer customStyles={{ backgroundColor: Colors.white }}>

            {/* Header */}
            <OtrixHeader >
                <TouchableOpacity style={GlobalStyles.headerLeft} onPress={() => props.navigation.goBack()}>
                    <OtirxBackButton />
                </TouchableOpacity>
                <View style={[GlobalStyles.headerCenter, { flex: 1 }]}>
                    <Text style={GlobalStyles.headingTxt}> Forgot Password</Text>
                </View>
            </OtrixHeader>
            <ImageBackground source={forgot} style={styles.bgimage}>
                <OtrixDivider size={'md'} />
                {/* Content Start from here */}
                <OtrixContent>
                    <View style={styles.innerContainer}>
                        <Text style={styles.textHeading}>Enter your email address we will send you link to reset your password!</Text>

                        {/* Forgot password form Start from here */}
                        <FormControl isRequired style={{ backgroundColor: Colors.white }} >
                            <Input variant="outline" placeholder="Email Address" style={GlobalStyles.textInputStyle}
                                onChangeText={(value) => setData({ ...formData, email: value })}
                            />
                            <FormControl.ErrorMessage _text={{ fontSize: 'xs' }}>Error Name</FormControl.ErrorMessage>
                        </FormControl>
                        <OtrixDivider size={'md'} />
                        <Button
                            size="md"
                            variant="solid"
                            bg={Colors.themeColor}
                            style={GlobalStyles.button}
                            onPress={() => props.navigation.navigate('LoginScreen')}
                        >
                            <Text style={GlobalStyles.buttonText}>Submit</Text>
                        </Button>
                        <OtrixDivider size={'md'} />
                        <Button
                            size="md"
                            variant="outline"
                            onPress={() => props.navigation.navigate('LoginScreen')}
                        >
                            <Text style={[GlobalStyles.buttonText]}>Back to login</Text>
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

export default connect(mapStateToProps)(ForgotPasswordScreen);

const styles = StyleSheet.create({

    bgimage: {
        height: hp('100%'),
        resizeMode: 'cover'
    },
    innerContainer: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0, 0.60)',
        padding: wp('5%'),
        marginTop: hp('16%'),
        borderRadius: 10
    },
    textHeading: {
        marginVertical: hp('2%'),
        color: Colors.white,
        fontSize: wp('3.5%'),
        fontFamily: Fonts.Font_Semibold
    }
});