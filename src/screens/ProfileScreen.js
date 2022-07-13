import React, { useEffect } from "react";
import {
    View,
    StyleSheet,
    TouchableOpacity,
    ImageBackground,
    Image,
} from "react-native";
import {
    OtrixContainer,OtirxBackButton, OtrixHeader, OtrixContent, OtrixDivider, OtrixSocialContainer, OtrixAlert, OtrixLoader
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
import { loginpage } from '@common';

import getApi from "@apis/getApi";
import Toast from 'react-native-root-toast';
import CropDetails from "./CropDetails";
import OtrixEditButton from "../component/OtrixComponent/OtrixEditButton";

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
                <TouchableOpacity onPress={() =>props.navigation.navigate('RegisterScreen')}>
                    <OtrixEditButton/>
                </TouchableOpacity>
            </OtrixHeader>
            <ImageBackground source={loginpage} style={styles.bgimage} >
                {/* Content Start from here */}
<OtrixContent>
<View style={styles.header}>
<View style={styles.headerContent}>
                <Image style={styles.avatar}
                  source={{uri: 'https://bootdey.com/img/Content/avatar/avatar6.png'}}/>

<View style={styles.innerContainer}>
    <Text style={{fontSize:20,color:"white",fontWeight:"bold"}}>First Name: <Text> Ashish</Text></Text>
    <OtrixDivider size={'sm'} />
    <Text style={{fontSize:20, color:"white",fontWeight:"bold",}}>Last Name: <Text> Ashish</Text></Text>
    <OtrixDivider size={'sm'} />
    <Text style={{fontSize:20, color:"white",fontWeight:"bold",}}>Mobile Number : <Text> Ashish</Text></Text>
    <OtrixDivider size={'sm'} />
    <Text style={{fontSize:20, color:"white",fontWeight:"bold",}}>Village: <Text> Ashish</Text></Text>
    <OtrixDivider size={'sm'} />
    <Text style={{fontSize:20, color:"white",fontWeight:"bold",}}>Email: <Text> Ashish</Text></Text>
    <OtrixDivider size={'sm'} />
    <Text style={{fontSize:20, color:"white",fontWeight:"bold",}}>Block Name: <Text> Ashish</Text></Text>
    <OtrixDivider size={'sm'} />
    <Text style={{fontSize:20, color:"white",fontWeight:"bold",}}>Panchayat: <Text> Ashish</Text></Text>
    <OtrixDivider size={'sm'} />
    <Text style={{fontSize:20, color:"white",fontWeight:"bold",}}>Village: <Text> Ashish</Text></Text>
    <OtrixDivider size={'sm'} />
    <Text style={{fontSize:20, color:"white",fontWeight:"bold",}}>District: <Text> Ashish</Text></Text>
    

    
            </View>    
            </View> 
            </View>

    <OtrixDivider size={'sm'} />

    {/* Registration Form Start from here */}
    
 
</OtrixContent>
            </ImageBackground>

             <OtrixDivider size={'md'} />
             

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
    },
    bgimage: {
        height: hp('100%'),
    },
    avatar: {
        width: wp('20%'),
        height: hp('10%'),
        borderRadius: 63,
        borderWidth: 4,
        borderColor: "white",
        paddingTop:25
      },
      headerContent:{
        padding:30,
        alignItems: 'center',
      },
      
      name:{
        fontSize:22,
        color:"#000000",
        fontWeight:'600',
      },
      innerContainer: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0, 0.6)',
        padding: wp('5%'),
        marginTop: hp('8%'),
        borderRadius: 10,
        width:wp('80%'),
        alignItems:"center"
    },
});