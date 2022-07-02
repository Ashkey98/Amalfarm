import React, { useEffect } from "react";
import {
    View,
    StyleSheet,
    TouchableOpacity,
    ImageBackground
} from "react-native";
import {
    OtrixContainer, OtrixHeader, OtrixContent, OtrixDivider, OtrixAlert, OtrixLoader
} from '@component';
import { Input, Text, FormControl, Button, InfoOutlineIcon } from "native-base"
import { connect } from 'react-redux';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { GlobalStyles, Colors, isValidEmail, isValidMobile, isValidpassword, isValidConfirmPassword } from '@helpers'
import Icon from 'react-native-vector-icons/Ionicons';
import { logfunction } from "@helpers/FunctionHelper";
import Fonts from "@helpers/Fonts";
import getApi from "@apis/getApi";
import { Dropdown } from 'react-native-element-dropdown';
import AntIcon from 'react-native-vector-icons/AntDesign'
import { giscreen } from '@common';

const optionArr = [{ label: 'Option 1', value: 1 }, { label: 'Option 2', value: 2 }, { label: 'Option 3', value: 3 }, { label: 'Option 4', value: 4 }, { label: 'Option 5', value: 5 }, { label: 'Option 6', value: 6 }, { label: 'Option 7', value: 7 }, { label: 'Option 8', value: 8 }, { label: 'Option 9', value: 9 }, { label: 'Option 10', value: 10 }, { label: 'Option 11', value: 11 }, { label: 'Option 12', value: 12 }];

function AuthrizeGIScreen(props) {
    const [formData, setData] = React.useState({ isFocus, optionSelect: 0, giTagNumber: null, pincode: null, location: null, submited: false, type: null, message: null, loading: false });
    const [state, setDatapassword] = React.useState({ secureEntry: true });
    const [errors, setErrors] = React.useState({});
    const { optionSelect, giTagNumber, pincode, location, isFocus, submited, type, message, loading } = formData;

    useEffect(() => {

    }, []);

    const validate = () => {
        logfunction("Errors ", errors)
        setData({ ...formData, submited: true })
        if (giTagNumber == null || giTagNumber == '') {
            logfunction("FIeld ", 'GI Tag Number is required')
            setErrors({
                ...errors,
                giTagNumber: 'GI Tag Number is required'
            });
            return false;
        }
        else if (pincode == null) {
            setErrors({
                ...errors,
                pincode: 'Pin Code is required'
            });
            return false;
        }
        else if (location == null) {
            setErrors({
                ...errors,
                location: 'Location is required'
            });
            return false;
        }
        return true;

    }

    const register = () => {
        if (validate()) {
            setData({
                ...formData,
                loading: true
            });
            props.navigation.navigate("GIDetailsMessageScreen", { success: true });
            // let sendData = new FormData();
            // sendData.append('firstname', firstName);
            // sendData.append('lastname', lastName)
            // sendData.append('email', email)
            // sendData.append('telephone', mobileNumber)
            // sendData.append('password', password)
            // sendData.append('creation', 'D')

            // try {
            //     getApi.postData(
            //         'user/register',
            //         sendData,
            //     ).then((response => {
            //         logfunction("RESPONSE ", response)
            //         if (response.status == 1) {
            //             props.navigation.navigate("RegisterSuccessScreen");
            //         }
            //         else {
            //             setData({
            //                 ...formData,
            //                 type: 'error',
            //                 message: response.message,
            //                 loading: false
            //             });
            //             setTimeout(() => {
            //                 setData({
            //                     ...formData,
            //                     message: null,
            //                     loading: false
            //                 })
            //             }, 3000);
            //         }
            //     }));
            // } catch (error) {
            //     logfunction("Error", error)
            //     setData({
            //         ...formData,
            //         loading: false
            //     })
            // }


        }
    }


    const setOptionSelect = (selected, data) => {
        setData({
            ...state,
            optionSelect: selected,
        });
    }

    return (
        <OtrixContainer>

            {/* Header */}
            <OtrixHeader >
                <TouchableOpacity style={GlobalStyles.headerLeft} onPress={() => props.navigation.goBack()}>
                    {/* <OtirxBackButton /> */}
                </TouchableOpacity>
                <View style={[GlobalStyles.headerCenter, { flex: 0.70 }]}>
                    <Text style={GlobalStyles.headingTxt}> Authorise GI Crop</Text>
                </View>
                <View style={{ flex: 0.05 }}>
                </View>
            </OtrixHeader>

            <ImageBackground source={giscreen} resizeMode="cover" style={styles.bgimage}>

                <OtrixDivider size={'md'} />

                {/* Content Start from here */}
                <OtrixContent>

                    <View style={styles.innerContainer}>
                        {/* Authorise GI Form Start from here */}
                        <Dropdown
                            style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                            iconStyle={styles.iconStyle}
                            data={optionArr}
                            search
                            maxHeight={300}
                            labelField="label"
                            valueField="value"
                            placeholder={!isFocus ? 'Select item' : '...'}
                            searchPlaceholder="Search..."
                            value={optionSelect}
                            onChange={item => {
                                setOptionSelect(item.value, item);
                            }}
                            renderLeftIcon={() => (
                                <AntIcon
                                    style={styles.icon}
                                    color={isFocus ? 'blue' : 'black'}
                                    name="Safety"
                                    size={20}
                                />
                            )}
                        />
                        <OtrixDivider size={'md'} />
                        <FormControl style={{ backgroundColor: Colors.white }} isRequired isInvalid={submited && 'giTagNumber' in errors}>
                            <Input variant="outline" placeholder="GI Tag Number" style={GlobalStyles.textInputStyle}
                                onChangeText={(value) => { setData({ ...formData, submited: false, giTagNumber: value }), delete errors.giTagNumber }}
                            />
                            <FormControl.ErrorMessage
                                leftIcon={<InfoOutlineIcon size="xs" />}
                            >
                                {errors.giTagNumber}
                            </FormControl.ErrorMessage>
                        </FormControl>
                        <OtrixDivider size={'md'} />
                        <FormControl style={{ backgroundColor: Colors.white }} isRequired isInvalid={submited && 'pincode' in errors}>
                            <Input variant="outline" placeholder="Pin Code" style={GlobalStyles.textInputStyle}
                                onChangeText={(value) => { setData({ ...formData, submited: false, pincode: value }), delete errors.pincode }}
                            />
                            <FormControl.ErrorMessage
                                leftIcon={<InfoOutlineIcon size="xs" />}
                            >
                                {errors.pincode}
                            </FormControl.ErrorMessage>
                        </FormControl>
                        <OtrixDivider size={'md'} />
                        <FormControl style={{ backgroundColor: Colors.white }} isRequired isInvalid={submited && 'location' in errors}>
                            <Input variant="outline" placeholder="Location Geotag" style={GlobalStyles.textInputStyle}
                                onChangeText={(value) => { setData({ ...formData, submited: false, location: value }), delete errors.location }}
                            />
                            <FormControl.ErrorMessage
                                leftIcon={<InfoOutlineIcon size="xs" />}
                            >
                                {errors.location}
                            </FormControl.ErrorMessage>
                        </FormControl>
                        <OtrixDivider size={'md'} />

                        <OtrixDivider size={'md'} />
                        {loading && <OtrixLoader />}
                        {loading && <OtrixDivider size={'md'} />}
                        <Button
                            size="md"
                            variant="solid"
                            bg={Colors.themeColor}
                            style={[GlobalStyles.button]}
                            onPress={() => register()}
                        >
                            <Text style={GlobalStyles.buttonText}>Save</Text>
                        </Button>
                    </View>
                </OtrixContent>

                {
                    message != null && <OtrixAlert type={type} message={message} />
                }
            </ImageBackground>
        </OtrixContainer >
    )

}

function mapStateToProps({ params }) {
    return {}
}

export default connect(mapStateToProps)(AuthrizeGIScreen);

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
        color: Colors.secondry_text_color
    },
    signupTxt: {
        fontSize: wp('3.5%'),
        textAlign: 'right',
        fontFamily: Fonts.Font_Semibold,
        color: Colors.link_color
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    dropdown: {
        height: 40,
        width: wp('82%'),
        borderColor: 'gray',
        borderWidth: 0.5,
        borderRadius: 8,
        paddingHorizontal: 8,
        backgroundColor: Colors.white
    },
    icon: {
        marginRight: 5,
    },
    bgimage: {
        height: hp('100%'),
    },
    innerContainer: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0, 0.60)',
        padding: wp('5%'),
        marginTop: hp('16%'),
        borderRadius: 10
    },
});