import React, { useEffect } from "react";
import {
    View,
    StyleSheet,
    TouchableOpacity,
    Image
} from "react-native";
import {
    OtrixContainer, OtrixHeader, OtrixContent, OtrixDivider, OtrixAlert, OtrixLoader,OtirxBackButton,
} from '@component';
import { Input, Text, FormControl, Button, InfoOutlineIcon } from "native-base"
import { connect } from 'react-redux';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { GlobalStyles, Colors, isValidEmail, isValidMobile, isValidpassword, isValidConfirmPassword } from '@helpers'
import Icon from 'react-native-vector-icons/Ionicons';
import { logfunction } from "@helpers/FunctionHelper";
import Fonts from "@helpers/Fonts";
import getApi from "@apis/getApi";
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { avatarImg, avatarImg2 } from '@common';


function RegisterFarmer(props) {
    const [formData, setData] = React.useState({ profileImage: null, firstName: null, lastName: null, email: null, mobileNumber: null, password: null, cpassword: null, submited: false, type: null, message: null, panchayat: null, block: null, village: null, district: null, instate: null, pincode: null, loading: false });
    const [state, setDatapassword] = React.useState({ secureEntry: true });
    const [errors, setErrors] = React.useState({});
    const { firstName, profileImage, lastName, mobileNumber, email, password, cpassword, submited, type, message, panchayat, village, district, instate, pincode, loading } = formData;

    useEffect(() => {

    }, []);

    const validate = () => {
        logfunction("Name ", firstName)
        logfunction("Errors ", errors)
        setData({ ...formData, submited: true })

        if (firstName == null || firstName == '') {
            logfunction("FIeld ", 'First name is required')
            setErrors({
                ...errors,
                name: 'First Name is required'
            });
            return false;
        }
        else if (email == null) {
            logfunction("FIeld ", 'Email is required')
            setErrors({
                ...errors,
                email: 'Email is required'
            });
            return false;
        }
        else if (!isValidEmail(email).success) {
            logfunction("FIeld ", isValidEmail(email).message)
            setErrors({
                ...errors,
                invalidEmail: isValidEmail(email).message
            });
            return false;
        }
        else if (mobileNumber == null) {
            logfunction("FIeld ", 'Mobile number is required')
            setErrors({
                ...errors,
                mobileNumber: 'Mobile number is required'
            });
            return false;
        }
        else if (!isValidMobile(mobileNumber).success) {
            logfunction("FIeld ", isValidMobile(mobileNumber).message)
            setErrors({
                ...errors,
                invalidmobileNumber: isValidMobile(mobileNumber).message
            });
            return false;
        }
        else if (!isValidpassword(password).success) {
            logfunction("FIeld ", isValidpassword(password).message)
            setErrors({
                ...errors,
                password: isValidpassword(password).message
            });
            return false;
        }
        else if (!isValidConfirmPassword(password, cpassword).success) {
            setErrors({
                ...errors,
                cpassword: isValidConfirmPassword(password, cpassword).message
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
            })
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

            props.navigation.navigate("MainScreen");

        }
    }

    const openImagePicker = async (res) => {

        setState({
            ...state,
            profileImage: res.assets[0]['uri'],
        });

    }

    return (
        <OtrixContainer customStyles={{ backgroundColor: Colors.white }}>

          {/* Header */}
        <OtrixHeader >
                <TouchableOpacity style={GlobalStyles.headerLeft} onPress={() => props.navigation.goBack()}>
                    <OtirxBackButton />
                </TouchableOpacity>
                <View style={[GlobalStyles.headerCenter, { flex: 1 }]}>
                    <Text style={GlobalStyles.headingTxt}> Register Farmer</Text>
                </View>
            </OtrixHeader>

            <OtrixDivider size={'md'} />

            {/* Content Start from here */}
            <OtrixContent>

                <TouchableOpacity style={styles.imageView}
                    onPress={() => launchImageLibrary(
                        {
                            mediaType: 'photo',
                            includeBase64: false,
                            maxHeight: 400,
                            maxWidth: 400,
                        },
                        (response) => {
                            openImagePicker(response);
                        },
                    )}
                >


                    {profileImage != null && <Image source={{ uri: profileImage }} style={styles.image}></Image>}

                    {profileImage == null && <Image source={avatarImg2} style={styles.image}></Image>}


                </TouchableOpacity>
                <OtrixDivider size={'sm'} />

                {/* Registration Form Start from here */}
                <FormControl style={{ backgroundColor: Colors.white }} isRequired isInvalid={submited && 'name' in errors}>
                    <Input variant="outline" placeholder="First Name" style={GlobalStyles.textInputStyle}
                        onChangeText={(value) => { setData({ ...formData, submited: false, firstName: value }), delete errors.name }}
                    />
                    <FormControl.ErrorMessage
                        leftIcon={<InfoOutlineIcon size="xs" />}
                    >
                        {errors.name}
                    </FormControl.ErrorMessage>
                </FormControl>
                <OtrixDivider size={'sm'} />
                <FormControl style={{ backgroundColor: Colors.white }} isRequired >
                    <Input variant="outline" placeholder="Last Name" style={GlobalStyles.textInputStyle}
                        onChangeText={(value) => setData({ ...formData, submited: false, lastName: value })}
                    />
                </FormControl>
                <OtrixDivider size={'sm'} />

                <FormControl style={{ backgroundColor: Colors.white }} isRequired isInvalid={submited && 'mobileNumber' in errors || 'invalidmobileNumber' in errors}>
                    <Input variant="outline" keyboardType="number-pad" placeholder="Mobile Number" style={GlobalStyles.textInputStyle}
                        onChangeText={(value) => { setData({ ...formData, submited: false, mobileNumber: value }), delete errors.mobileNumber, delete errors.invalidmobileNumber }}
                    />

                    {
                        'invalidmobileNumber' in errors == false && 'mobileNumber' in errors && <FormControl.ErrorMessage
                            leftIcon={<InfoOutlineIcon size="xs" />}
                        >
                            {errors.mobileNumber}
                        </FormControl.ErrorMessage>
                    }
                    {
                        'invalidmobileNumber' in errors && <FormControl.ErrorMessage
                            leftIcon={<InfoOutlineIcon size="xs" />}
                        >
                            {errors.invalidmobileNumber}
                        </FormControl.ErrorMessage>
                    }

                </FormControl>
                <OtrixDivider size={'sm'} />
                <FormControl style={{ backgroundColor: Colors.white }} isRequired={true} isInvalid={submited && 'password' in errors}>
                    <Input variant="outline" placeholder="Password" style={GlobalStyles.textInputStyle}
                        onChangeText={(value) => { setData({ ...formData, submited: false, password: value }), delete errors.password }}
                        secureTextEntry={state.secureEntry}
                        InputRightElement={
                            <TouchableOpacity onPress={() => setDatapassword({ ...state, secureEntry: !state.secureEntry })} style={{ marginRight: wp('3%') }}>
                                <Icon name={state.secureEntry == true ? "eye" : "eye-off"} size={18} color={Colors.secondry_text_color} />
                            </TouchableOpacity>
                        }
                    />
                    <FormControl.ErrorMessage
                        leftIcon={<InfoOutlineIcon size="xs" />}
                    >
                        {errors.password}
                    </FormControl.ErrorMessage>
                </FormControl>
                <OtrixDivider size={'sm'} />
                <FormControl style={{ backgroundColor: Colors.white }} isRequired isInvalid={submited && 'cpassword' in errors}>
                    <Input variant="outline" placeholder="Confirm Password" style={GlobalStyles.textInputStyle}
                        onChangeText={(value) => { setData({ ...formData, submited: false, cpassword: value }), delete errors.cpassword }}
                        secureTextEntry={state.secureEntry}
                        InputRightElement={
                            <TouchableOpacity onPress={() => setDatapassword({ ...state, secureEntry: !state.secureEntry })} style={{ marginRight: wp('3%') }}>
                                <Icon name={state.secureEntry == true ? "eye" : "eye-off"} size={18} color={Colors.secondry_text_color} />
                            </TouchableOpacity>
                        }
                    />
                    <FormControl.ErrorMessage
                        leftIcon={<InfoOutlineIcon size="xs" />}
                    >
                        {errors.cpassword}
                    </FormControl.ErrorMessage>
                </FormControl>
                <OtrixDivider size={'md'} />
                <FormControl style={{ backgroundColor: Colors.white }} isRequired isInvalid={submited && 'block' in errors}>
                    <Input variant="outline" placeholder="Block Name" style={GlobalStyles.textInputStyle}
                        onChangeText={(value) => { setData({ ...formData, submited: false, block: value }), delete errors.block }}
                    />
                    <FormControl.ErrorMessage
                        leftIcon={<InfoOutlineIcon size="xs" />}
                    >
                        {errors.block}
                    </FormControl.ErrorMessage>
                </FormControl>
                <OtrixDivider size={'md'} />
                <FormControl style={{ backgroundColor: Colors.white }} isRequired isInvalid={submited && 'panchayat' in errors}>
                    <Input variant="outline" placeholder="Panchayat" style={GlobalStyles.textInputStyle}
                        onChangeText={(value) => { setData({ ...formData, submited: false, panchayat: value }), delete errors.panchayat }}
                    />
                    <FormControl.ErrorMessage
                        leftIcon={<InfoOutlineIcon size="xs" />}
                    >
                        {errors.panchayat}
                    </FormControl.ErrorMessage>
                </FormControl>
                <OtrixDivider size={'md'} />
                <FormControl style={{ backgroundColor: Colors.white }} isRequired isInvalid={submited && 'village' in errors}>
                    <Input variant="outline" placeholder="Village" style={GlobalStyles.textInputStyle}
                        onChangeText={(value) => { setData({ ...formData, submited: false, village: value }), delete errors.village }}
                    />
                    <FormControl.ErrorMessage
                        leftIcon={<InfoOutlineIcon size="xs" />}
                    >
                        {errors.village}
                    </FormControl.ErrorMessage>
                </FormControl>
                <OtrixDivider size={'md'} />
                <FormControl style={{ backgroundColor: Colors.white }} isRequired isInvalid={submited && 'district' in errors}>
                    <Input variant="outline" placeholder="District" style={GlobalStyles.textInputStyle}
                        onChangeText={(value) => { setData({ ...formData, submited: false, district: value }), delete errors.district }}
                    />
                    <FormControl.ErrorMessage
                        leftIcon={<InfoOutlineIcon size="xs" />}
                    >
                        {errors.district}
                    </FormControl.ErrorMessage>
                </FormControl>
                <OtrixDivider size={'md'} />
                <FormControl style={{ backgroundColor: Colors.white }} isRequired isInvalid={submited && 'instate' in errors}>
                    <Input variant="outline" placeholder="State" style={GlobalStyles.textInputStyle}
                        onChangeText={(value) => { setData({ ...formData, submited: false, instate: value }), delete errors.instate }}
                    />
                    <FormControl.ErrorMessage
                        leftIcon={<InfoOutlineIcon size="xs" />}
                    >
                        {errors.instate}
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

                <OtrixDivider size={'md'} />
                {loading && <OtrixLoader />}
                {loading && <OtrixDivider size={'md'} />}
                {/* <View style={styles.registerView}>
                    <Text style={styles.registerTxt}>Already have an account? </Text>
                    <TouchableOpacity onPress={() => props.navigation.navigate('LoginScreen')}>
                        <Text style={styles.signupTxt}> Sign In </Text>
                    </TouchableOpacity>
                </View> */}

            </OtrixContent>
            <Button
                size="md"
                variant="solid"
                bg={Colors.themeColor}
                style={GlobalStyles.button}
                onPress={() => props.navigation.navigate("CropDetails")}
            >
                <Text style={GlobalStyles.buttonText}>Register Now</Text>
            </Button>
            {
                message != null && <OtrixAlert type={type} message={message} />
            }

        </OtrixContainer >
    )

}

function mapStateToProps({ params }) {
    return {}
}



export default connect(mapStateToProps)(RegisterFarmer);

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
    image: {
        resizeMode: 'contain',
        height: undefined,
        aspectRatio: 1,
        width: wp('20%'),
        alignSelf: 'center'
    },
});