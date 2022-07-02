import React, { useState } from "react"
import {
    Text,
    View,
    ImageBackground,
    StyleSheet,
    TextInput,
    Image
  } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Input,  FormControl, Button, InfoOutlineIcon } from "native-base"

import { SafeAreaView } from "react-native-safe-area-context";
import { GlobalStyles, Colors} from '@helpers'
import { TouchableOpacity } from "react-native-gesture-handler";
import {
    OtrixContainer, OtrixHeader, OtrixContent, OtrixDivider, OtrixSocialContainer, OtrixAlert, OtrixLoader
} from '@component';

import { cropDetails } from '@common';
import { Dropdown } from 'react-native-element-dropdown';
import AntIcon from 'react-native-vector-icons/AntDesign'
import DatePicker from 'react-native-datepicker'
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';



function CropDetails(props){
    const [formData, setData] = React.useState({ isFocus });
    const [imageUri, setImageUri] = useState('')
    const { isFocus,optionSelect } = formData;

    const openCamera = () => {
        let options = {
            storageOptions :{
                path: 'images',
                mediaType:'photo'
            },
            includeBase64: true
        };
        launchCamera(options, response =>{
            console.log('Response===', response);
            if(response.didCancel){
                console.log("User Cancelled to Uplaod Crop Image");
            }
            else if(response.error){
                console.log(("ImagePicker Error : ", response.error));
            }
            else if(response.customButton){
                console.log("User Tapped Custom Button: ",reponse.customButton);
            }
            // else{
                
            // }
        } )
    }

    return(
        <OtrixContainer customStyles={{ backgroundColor: Colors.white }}>
             {/* Header */}
        <OtrixHeader >
                <TouchableOpacity style={GlobalStyles.headerLeft} onPress={() => props.navigation.goBack()}>
                <OtirxBackButton />

                </TouchableOpacity>
                <View style={[GlobalStyles.headerCenter, { flex: 1 }]}>
                    <Text style={GlobalStyles.headingTxt}> Crop Details</Text>
                </View>
            </OtrixHeader>

            <ImageBackground source={cropDetails} style={styles.bgimage} >
            <OtrixDivider size={'md'} />
                {/* Content Start from here */}
                <OtrixContent>
                    <View style={styles.innerContainer}>
                    {/* <FormControl  style={{ height: Platform.isPad === true ? wp('6%') : wp('11%'),
                     */}
                    <Dropdown
                            style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                            iconStyle={styles.iconStyle}
                            search
                            maxHeight={300}
                            labelField="label"
                            valueField="value"
                            placeholder={!isFocus ? 'Crop Name' : '...'}
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


                       <TextInput
                        style={styles.input}
                        // onChangeText={onChangeNumber}
                        // value={number}
                        placeholder="Crop Area"
                        keyboardType="numeric"
      />
                      <OtrixDivider size={'md'} />  
                      <DatePicker
                    style={styles.input}
                    // date={this.state.date}
                    mode="date"
                    placeholder="Date Of Sowing"
                    format="YYYY-MM-DD"
                    minDate="2016-05-01"
                    maxDate="2016-06-01"
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    customStyles={{
                    dateIcon: {
                        position: 'absolute',
                        left: 0,
                        top: 4,
                        marginLeft: 0
                    },
                    dateInput: {
                        marginLeft: 36
                    }
                    // ... You can check the source to find the other keys.
                    }}
                    // onDateChange={(date) => {this.setState({date: date})}}
                />
                <OtrixDivider size={'md'} />  

                 <TextInput
                        style={styles.input}
                        // onChangeText={onChangeNumber}
                        // value={number}
                        placeholder="Harvest Quantity (In Quintal)"
                        keyboardType="numeric"
      />
                <OtrixDivider size={'md'} />  
                <TextInput
                        style={styles.input}
                        // onChangeText={onChangeNumber}
                        // value={number}
                        placeholder="Selling Price/Quintal ( In INR)"
                        keyboardType="numeric"
      />
            <OtrixDivider size={'md'} />  
            <View style={{display:"flex", flexDirection:"row",justifyContent:"space-evenly"}}>
            <Text style={{fontSize:18,color:"white"}}>Capture Crop Image : </Text>
                <Button
                            size="md"
                            variant="solid"
                            bg={Colors.themeColor}
                            style={styles.button}
                            onPress={() => alert("Crop Saved")}
                        >
                            <Text style={GlobalStyles.buttonText}>Click Here</Text>
                        </Button>
                
            </View>

            <OtrixDivider size={'md'} />  

            <View style={{display:"flex", flexDirection:"row",justifyContent:"space-evenly"}}>
            <Text style={{fontSize:18,color:"white"}}>Capture Harvest Image : </Text>
                <Button
                            size="md"
                            variant="solid"
                            bg={Colors.themeColor}
                            style={styles.button}
                            onPress={() => alert("Crop Saved")}
                        >
                            <Text style={GlobalStyles.buttonText}>Click Here</Text>
                        </Button>
                
            </View>

            <OtrixDivider size={'md'} />  

            <View>
            <Button
                            size="md"
                            variant="solid"
                            bg={Colors.themeColor}
                            style={GlobalStyles.button}
                            onPress={() => {
                                props.navigation.navigate("SoilTesting")
                                alert("Crop Details Saved")}}
                        >
                            <Text style={GlobalStyles.buttonText}>Save</Text>
                        </Button>

                        <Image
                        source={imageUri}
                        style={{height:100, width:100, borderRadius:2, bordeColor:"black",}}/>
            </View>
                
                    </View>

                </OtrixContent>
            </ImageBackground>
        </OtrixContainer>
        
    
    )
}

export default CropDetails;


const styles = StyleSheet.create({
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
    dropdown: {
        height: 40,
        width: wp('82%'),
        borderColor: 'gray',
        borderWidth: 0.5,
        borderRadius: 8,
        paddingHorizontal: 8,
        backgroundColor: Colors.white
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    input:{
        height: 40,
        width: wp('82%'),
        borderWidth: 0.5,
        borderRadius: 8,
        paddingHorizontal: 8,
        backgroundColor: Colors.white,
        fontColor:'black'
    },
    button:{
        width:wp('30%')
    }
    
   
})