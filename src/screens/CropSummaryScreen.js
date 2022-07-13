import React, { Component } from 'react';
import { ImageBackground, StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import {
  OtrixContainer, OtrixHeader, OtrixContent, OtrixDivider, OtrixSocialContainer, OtrixAlert, OtrixLoader
} from '@component';
import { GlobalStyles, Colors, isValidEmail, isValidpassword } from '@helpers'
import { loginpage } from '@common';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';



export default class CropSummaryScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      HeadTable: ['Harvest', 'Price'],
      DataTable: [
        ['1', '2'],
        ['a', 'b'],
       
      ]
    }
  }
  render() {
    const state = this.state;
    return (
      <OtrixContainer customStyles={{ backgroundColor: Colors.white }}>
        <OtrixHeader >
      <TouchableOpacity style={GlobalStyles.headerLeft} onPress={() => props.navigation.goBack()}>
          <OtirxBackButton />
      </TouchableOpacity>
      <View style={[GlobalStyles.headerCenter, { flex: 1 }]}>
          <Text style={GlobalStyles.headingTxt}> Crop Summary</Text>
      </View>
  </OtrixHeader>
  <ImageBackground source={loginpage} style={styles.bgimage} >
  <OtrixDivider size={'md'} />
  <OtrixContent style={{width:wp('100%')}}>

  <View style={styles.cropAdvisoryBox}>
<Text style={styles.headingText}>Summary</Text>
</View>
      <View style={styles.container}
      > 
        <Table borderStyle={{borderWidth: 1, borderColor: 'black'}}>
          <Row data={state.HeadTable} style={styles.HeadStyle} textStyle={styles.HeadText}/>
          <Rows data={state.DataTable} textStyle={styles.TableText}/>
        </Table>
      </View>
      </OtrixContent>
      </ImageBackground>
      </OtrixContainer> 

      
    )
  }
}
const styles = StyleSheet.create({
  container: { 
    flex: 1,
    padding: 18,
    paddingTop: 35,
  },
  HeadStyle: { 
    height: 50,
    alignContent: "center",
    backgroundColor: 'orange',
    
  },
  TableText: { 
    margin: 10
  },
  bgimage: {
    height: hp('100%'),
},
TableText: { 
  margin: 10,
  fontSize:18,
},
HeadText:{
  color:"white",
  margin: 10,
  fontSize:18,
},
cropAdvisoryBox:{
  width:wp('40%'),
  backgroundColor:"orange",
  height:55,
  marginLeft:100,
  borderRadius:10,
  borderColor:"orange",
  borderWidth:2,
  alignItems:"center",
  justifyContent:"center"
},
headingText:{
  fontSize:20,color:"white",fontWeight:"bold"
},
});