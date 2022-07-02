import React, { useEffect } from "react";
import {
    View,
    StyleSheet,
    TouchableOpacity
} from "react-native";
import {
    OtrixContainer, OtrixHeader, OtrixContent, OtrixDivider, OtrixSocialContainer, OtrixAlert, OtrixLoader
} from '@component';
import { Input, Text, FormControl, Button, InfoOutlineIcon } from "native-base"
import { connect } from 'react-redux';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { GlobalStyles, Colors, isValidEmail, isValidpassword } from '@helpers'
import Icon from 'react-native-vector-icons/Ionicons';
import { logfunction } from "@helpers/FunctionHelper";
import Fonts from "../helpers/Fonts";
import { bindActionCreators } from 'redux';
import { doLogin } from '@actions';
import getApi from "@apis/getApi";
import Toast from 'react-native-root-toast';

function ProfileScreen(props) {

    const [formData, setData] = React.useState({ email: null, password: null, submited: false, loading: false, type: null, message: null, navTo: 'HomeScreen' });
    const [state, setDatapassword] = React.useState({ secureEntry: true });
    const [errors, setErrors] = React.useState({});
    const { email, password, submited, loading, message, type, navTo } = formData;

    useEffect(() => {

    }, [
        //   props.navigation.navigate('ProfileScreen')
    ]);



    return (
        // <OtrixContainer customStyles={{ backgroundColor: Colors.white }}>

        //     {/* Header */}
        //     <OtrixHeader customStyles={{ backgroundColor: Colors.white }}>
        //         <TouchableOpacity style={GlobalStyles.headerLeft} onPress={() => props.navigation.goBack()}>
        //             {/* <OtirxBackButton /> */}
        //         </TouchableOpacity>
        //         <View style={[GlobalStyles.headerCenter, { flex: 1 }]}>
        //             <Text style={GlobalStyles.headingTxt}>Profile</Text>

        //         </View>
        //     </OtrixHeader>

        //     <OtrixDivider size={'md'} />

        //     {/* Content Start from here */}
        //     <OtrixContent>

        //     </OtrixContent>
        //     {
        //         message != null && <OtrixAlert type={type} message={message} />
        //     }
        //     <Text style={GlobalStyles.headingTxt}>Profile</Text>

        // </OtrixContainer >
        
        <OtrixContainer customStyles={{ backgroundColor: Colors.white }}>
             <OtrixHeader >
                <TouchableOpacity style={GlobalStyles.headerLeft} onPress={() => props.navigation.goBack()}>
                <OtirxBackButton />

                </TouchableOpacity>
                <View style={[GlobalStyles.headerCenter, { flex: 1 }]}>
                    <Text style={GlobalStyles.headingTxt}>Profile</Text>
                </View>
            </OtrixHeader>
             <OtrixDivider size={'md'} />

{/* Content Start from here */}
<OtrixContent>

    




    <OtrixDivider size={'sm'} />

    {/* Registration Form Start from here */}
    
    

    

</OtrixContent>
        </OtrixContainer>

    )

}

function mapStateToProps({ params }) {
    return {}
}

const mapDispatchToProps = dispatch => (
    bindActionCreators({
        doLogin
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen);

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
    }
});