import React, { useEffect } from "react";
import {
    View,
    StyleSheet,
    Image,
    TouchableOpacity,
    ImageBackground
} from "react-native";
import {
    OtrixContainer, OtrixHeader, OtrixContent, OtrixDivider, OtrixAlert, OtirxBackButton
} from '@component';
import { Input, Text, Button } from "native-base"
import { connect } from 'react-redux';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { GlobalStyles, Colors } from '@helpers'
import { logfunction } from "@helpers/FunctionHelper";
import Fonts from "@helpers/Fonts";
import Icon from 'react-native-vector-icons/Ionicons';
import { laneng, language, lanhindi, lanbangali, lanmarathi } from '@common';
import LinearGradient from 'react-native-linear-gradient';

function LanguageScreen(props) {
    const [state, setState] = React.useState({ selectedLanguage: null });

    useEffect(() => {

    }, []);

    const selectLanguage = (lang) => {
        logfunction("LANG ", lang)
        setState({
            selectedLanguage: lang
        });
    }

    const { selectedLanguage } = state;

    return (
        <OtrixContainer>
            {/* Header */}
            <OtrixHeader>
                <TouchableOpacity style={GlobalStyles.headerLeft} onPress={() => props.navigation.goBack()}>
                    <OtirxBackButton />
                </TouchableOpacity>
                <View style={[GlobalStyles.headerCenter, { flex: 1 }]}>
                    <Text style={GlobalStyles.headingTxt}> Select Language</Text>
                </View>
            </OtrixHeader>
            <ImageBackground source={language} resizeMode="cover" style={styles.bgimage}>
                <View style={styles.innerContainer}>
                    <OtrixDivider size={'md'} />

                    {/* Content Start from here */}
                    <OtrixContent >
                        <View style={styles.languageView}>
                            <TouchableOpacity style={[styles.languageColumn, { borderWidth: selectedLanguage == 'english' ? 1.5 : 0.2, borderColor: selectedLanguage == 'english' ? Colors.themeColor : Colors.white }]} onPress={() => selectLanguage('english')}>
                                <Image source={laneng} resizeMode="contain" style={styles.image} />
                                <Text style={[styles.txtLang, { fontFamily: selectedLanguage == 'english' ? Fonts.Font_Semibold : Fonts.Font_Reguler }]}>English</Text>
                                {selectedLanguage == 'english' &&
                                    <Text style={{ bottom: hp('23%'), left: wp('16%') }}> <Icon name="md-checkmark-circle-sharp" color={Colors.themeColor} size={wp('6%')} style={{ textAlignVertical: 'center' }} /></Text>
                                }
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.languageColumn, { borderWidth: selectedLanguage == 'hindi' ? 1.5 : 0.2, borderColor: selectedLanguage == 'hindi' ? Colors.themeColor : Colors.white }]} onPress={() => selectLanguage('hindi')}>
                                <Image source={lanhindi} resizeMode="contain" style={styles.image} />
                                <Text style={[styles.txtLang, { fontFamily: selectedLanguage == 'hindi' ? Fonts.Font_Semibold : Fonts.Font_Reguler }]}>हिंदी</Text>
                                {selectedLanguage == 'hindi' &&
                                    <Text style={{ bottom: hp('23%'), left: wp('16%') }}> <Icon name="md-checkmark-circle-sharp" color={Colors.themeColor} size={wp('6%')} style={{ textAlignVertical: 'center' }} /></Text>
                                }
                            </TouchableOpacity>
                        </View>
                        <OtrixDivider size={'md'} />
                        <View style={styles.languageView}>
                            <TouchableOpacity style={[styles.languageColumn, { borderWidth: selectedLanguage == 'marathi' ? 1.5 : 0.2, borderColor: selectedLanguage == 'marathi' ? Colors.themeColor : Colors.white }]} onPress={() => selectLanguage('marathi')}>
                                <Image source={lanmarathi} resizeMode="contain" style={styles.image} />
                                <Text style={[styles.txtLang, { fontFamily: selectedLanguage == 'marathi' ? Fonts.Font_Semibold : Fonts.Font_Reguler }]}>मराठी</Text>
                                {selectedLanguage == 'marathi' &&
                                    <Text style={{ bottom: hp('23%'), left: wp('16%') }}> <Icon name="md-checkmark-circle-sharp" color={Colors.themeColor} size={wp('6%')} style={{ textAlignVertical: 'center' }} /></Text>
                                }
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.languageColumn, { borderWidth: selectedLanguage == 'bangali' ? 1.5 : 0.2, borderColor: selectedLanguage == 'bangali' ? Colors.themeColor : Colors.white }]} onPress={() => selectLanguage('bangali')}>
                                <Image source={lanbangali} resizeMode="contain" style={styles.image} />
                                <Text style={[styles.txtLang, { fontFamily: selectedLanguage == 'bangali' ? Fonts.Font_Semibold : Fonts.Font_Reguler }]}>বাংলা</Text>
                                {selectedLanguage == 'bangali' &&
                                    <Text style={{ bottom: hp('23%'), left: wp('16%') }}> <Icon name="md-checkmark-circle-sharp" color={Colors.themeColor} size={wp('6%')} style={{ textAlignVertical: 'center' }} /></Text>
                                }
                            </TouchableOpacity>
                        </View>
                        <OtrixDivider size={'md'} />

                        <OtrixDivider size={'md'} />
                        <Button
                            size="md"
                            variant="solid"
                            bg={Colors.themeColor}
                            style={[GlobalStyles.button, { marginHorizontal: wp('5%'), marginBottom: hp('1%') }]}
                            onPress={() => props.navigation.navigate('AuthrizeGIScreen')}
                        >
                            <Text style={GlobalStyles.buttonText}>Save</Text>
                        </Button>
                        {/* 
                    <TouchableOpacity onPress={() => props.navigation.navigate('AuthrizeGIScreen')}>
                        <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.linearGradient} >
                            <Text style={styles.buttonText}>
                                Save
                            </Text>
                        </LinearGradient>
                    </TouchableOpacity> */}

                    </OtrixContent>
                </View>

            </ImageBackground>
        </OtrixContainer >
    )

}

function mapStateToProps({ params }) {
    return {}
}

export default connect(mapStateToProps)(LanguageScreen);

const styles = StyleSheet.create({
    registerView: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    languageView: {
        flexDirection: 'row',
        flex: 1,
    },
    languageColumn: {
        backgroundColor: Colors.white,
        height: hp('30%'),
        flex: 0.50,
        shadowColor: 'grey',
        shadowOffset: { width: 0, height: 0.4 },
        shadowOpacity: 0.30,
        shadowRadius: 3,
        elevation: 6,
        borderRadius: wp('2%'),
        marginHorizontal: wp('2%'),
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: Colors.black,
    },
    image: {
        resizeMode: 'contain',
        alignSelf: 'center',
        height: hp('20%'),
        width: wp('30%'),
    },
    txtLang: {
        fontSize: wp('3.8%'),
        color: Colors.text_color
    },
    bgimage: {
        height: hp('100%'),
    },
    innerContainer: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0, 0.50)',
    },
    linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5
    },
    buttonText: {
        fontSize: 18,
        fontFamily: 'Gill Sans',
        textAlign: 'center',
        margin: 10,
        color: '#ffffff',
        backgroundColor: 'transparent',
    },
});