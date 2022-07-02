import React, { useEffect } from "react";
import {
    View,
    StyleSheet,
    TouchableOpacity,
    ImageBackground
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
import { loginpage } from '@common';

import { DataTable } from 'react-native-paper';


function CropAdvisoryScreen(props) {


   


    return (
        <OtrixContainer customStyles={{ backgroundColor: Colors.white }}>

        {/* Header */}
        <OtrixHeader >
                <TouchableOpacity style={GlobalStyles.headerLeft} onPress={() => props.navigation.goBack()}>
                    <OtirxBackButton />
                </TouchableOpacity>
                <View style={[GlobalStyles.headerCenter, { flex: 1 }]}>
                    <Text style={GlobalStyles.headingTxt}> Crop Advisory</Text>
                </View>
            </OtrixHeader>
        <ImageBackground source={loginpage} style={styles.bgimage} >
        <OtrixDivider size={'md'} />

        {/* Content Start from here */}
        <OtrixContent>
<View style={styles.cropAdvisoryBox}>
<Text style={styles.headingText}>Crop Advisory</Text>
</View>
<View style={{paddingTop:30}}>
<Text style={{
    fontSize:20,
}}>1. Crop Name: </Text>
</View>

<View style={{paddingTop:30}}>
<Text style={{
    fontSize:20,
}}>2. Package of Practice: </Text>
</View>
<View style={{backgroundColor:"white",height:400,top:50}}>
<DataTable style={styles.container}>
  <DataTable.Header style={styles.tableHeader}>
    <DataTable.Title ><Text style={styles.tableTitle}>Stage Name</Text></DataTable.Title>
    <DataTable.Title><Text style={styles.tableTitle}>Activity</Text></DataTable.Title>
    <DataTable.Title><Text style={styles.tableTitle}>Pest/Disease Advisory</Text></DataTable.Title>
  </DataTable.Header>
  <DataTable.Row style={{bottom:65}}>
    <DataTable.Cell >Radhika</DataTable.Cell>
    <DataTable.Cell>Dosa</DataTable.Cell>
    <DataTable.Cell>23</DataTable.Cell>
  </DataTable.Row>

  <DataTable.Row style={{bottom:65}}>
    <DataTable.Cell>Krishna</DataTable.Cell>
    <DataTable.Cell>Uttapam</DataTable.Cell>
    <DataTable.Cell>26</DataTable.Cell>
  </DataTable.Row>
  <DataTable.Row style={{bottom:65}}>
    <DataTable.Cell>Vanshika</DataTable.Cell>
    <DataTable.Cell>Brownie</DataTable.Cell>
    <DataTable.Cell>20</DataTable.Cell>
  </DataTable.Row>
  <DataTable.Row style={{bottom:65}}>
    <DataTable.Cell>Teena</DataTable.Cell>
    <DataTable.Cell>Pizza</DataTable.Cell>
    <DataTable.Cell>24</DataTable.Cell>
  </DataTable.Row>
</DataTable>
</View>


        </OtrixContent>
    </ImageBackground>

        {/* {
            message != null && <OtrixAlert type={type} message={message} />
        } */}

    </OtrixContainer >
    )};
       



export default (CropAdvisoryScreen);

const styles = StyleSheet.create({
    forgotPassword: {
        fontSize: wp('3%'),
        textAlign: 'right',
        fontFamily: Fonts.Font_Reguler,
        color: Colors.link_color,
        padding: 5
    },
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
    cropAdvisoryBox:{
        width:350,
        backgroundColor:"orange",
        height:55,
        borderRadius:10,
        borderColor:"orange",
        borderWidth:2,
        alignItems:"center",
        justifyContent:"center"
    },
    headingText:{
        fontSize:20,color:"white",fontWeight:"bold"
    },
    container: {
        paddingTop: 70,
        backGroundColor:"white"
      },
      tableHeader: {
        backgroundColor: 'orange',
        color:"white",
        fontSize:"25",
        bottom:75
      },
      tableTitle:{
        fontSize:15,fontWeight:"bold",color:"white",paddingBottom:25
      },
      bgimage: {
        height: hp('100%'),
    },

});