import React, { useEffect ,useRef} from "react";
import {
    View,
    TouchableOpacity,
    Text,
    StyleSheet,
    Image,
    Dimensions,
    DrawerLayoutAndroid
} from "react-native";
import { connect } from 'react-redux';

import {
    OtrixContainer, OtrixHeader, OtrixContent, OtrixDivider, SearchBar
} from '@component';
import { HomeSkeleton } from '@skeleton';
import { addToWishList } from '@actions';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Colors, GlobalStyles } from '@helpers';
import { bindActionCreators } from 'redux';
import { Button, Badge, Avatar } from "native-base";
import { farm, avatarImg, avatarImg2, slider1, slider2, slider3, forgot } from '@common';
import Fonts from "@helpers/Fonts";
import { _roundDimensions } from '@helpers/util';
import { _addToWishlist, logfunction } from "@helpers/FunctionHelper";
import getApi from "@apis/getApi";
import { ASSETS_DIR } from '@env';
import Carousel, { ParallaxImage } from 'react-native-snap-carousel';
const { width: screenWidth } = Dimensions.get('window')
import menu from "../common/config"

function HomeScreen(props) {
    const [state, setState] = React.useState({ homePageData: [], loading: false, profileImageURL: null });
    const images = [
        slider1,
        slider2,
        slider3
    ];
    const drawer = useRef(null);
    const addToWish = async (id) => {
        let wishlistData = await _addToWishlist(id);
        props.addToWishList(wishlistData, id);
    }

    useEffect(() => {

        // getApi.getData(
        //     "getHomePage",
        //     [],
        // ).then((response => {
        //     if (response.status == 1) {
        //         logfunction("RESPONSEEE ", response)
        //         setState({
        //             ...state,
        //             homePageData: response.data,
        //             loading: false
        //         });
        //     }
        // }));

    }, []);

    const { homePageData, loading, profileImageURL } = state;
    const { USER_AUTH, wishlistData, customerData, wishlistCount } = props;
    logfunction("profile Image ", customerData)
    logfunction("wishlistData wishlistData ", wishlistData)

    const _renderItem = ({ item, index }, parallaxProps) => {
        return (
            <View style={styles.item}>
                <ParallaxImage
                    source={item}
                    containerStyle={styles.imageContainer}
                    style={styles.image}
                    parallaxFactor={0.0}
                    {...parallaxProps}
                />

            </View>
        );
    }
    const navigationView = () => (
        <View style={[styles.container, styles.navigationContainer]}>
      <Text style={styles.paragraph}>I'm in the Drawer!</Text>
      <TouchableOpacity
      style={{width:50,height:50,backgroundColor:"blue",borderRadius:50}}
        title="Close drawer"
        onPress={() => drawer.current.closeDrawer()}
      />
    </View>
      );
    return (
        <DrawerLayoutAndroid
        ref={drawer}
        drawerWidth={300}
        drawerPosition={"left"}
        renderNavigationView={navigationView}
      >
        <OtrixContainer customStyles={{ backgroundColor: Colors.white }}>
            {/* Header */}
            <OtrixHeader >
                <TouchableOpacity style={styles.headerLeft} onPress={() => props.navigation.navigate('ProfileScreen')}>
                </TouchableOpacity>
                <TouchableOpacity
             title="Open drawer"
             onPress={() => drawer.current.openDrawer()}
        >
      <Image
        source={menu} style={styles.menu}
      />
      </TouchableOpacity>
                <View style={styles.headerCenter}>
                    <Text style={styles.headingTxt}>AmalFarm</Text>
                </View>
                <TouchableOpacity style={styles.headerRight} onPress={() => props.navigation.navigate('ProfileScreen')}>
                </TouchableOpacity>

            </OtrixHeader>

            {
                loading ? null :
                    <OtrixContent >
                        <Carousel
                            sliderWidth={screenWidth}
                            sliderHeight={screenWidth}
                            itemWidth={screenWidth - 55}
                            data={images}
                            inactiveSlideOpacity={0.5}
                            inactiveSlideScale={1}
                            renderItem={_renderItem}
                            firstItem={1}
                            loop={true}
                            autoplayDelay={2500}
                            autoplay={true}
                            activeAnimationType={'spring'}
                            activeSlideAlignment={'center'}
                            hasParallaxImages={true}
                        />
                        <OtrixDivider size={'md'} />
                        <View style={styles.catHeading}>
                            <Text style={GlobalStyles.boxHeading}>Guideline </Text>
                            <TouchableOpacity style={{ flex: 0.50 }} >
                                {/* <Text style={GlobalStyles.viewAll}>View All</Text> */}
                            </TouchableOpacity>
                        </View>
                        <OtrixDivider size={'md'} />

                        <View style={styles.Box}>
                            <TouchableOpacity style={styles.cartBox} >
                                <View style={[styles.imageView, { backgroundColor: Colors.light_white }]}>
                                    <Image source={slider2} style={styles.image}
                                    ></Image>
                                </View>
                                <View style={styles.infromationView}>
                                    <Text style={styles.productName} numberOfLines={2}>Lorem Ipsum Dolar</Text>
                                    <Text style={styles.description} numberOfLines={4}>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
                                        software like Aldus PageMaker including versions of Lorem Ipsum.
                                    </Text>
                                    <OtrixDivider size={'sm'} />
                                    <TouchableOpacity>
                                        <Text style={styles.readmore}>Read More</Text>
                                    </TouchableOpacity>
                                </View>
                                {
                                    <View style={GlobalStyles.newtextView} >
                                        <Text style={GlobalStyles.newTxt}>New</Text>
                                    </View>
                                }
                            </TouchableOpacity>
                        </View>
                        <View style={styles.Box}>
                            <TouchableOpacity style={styles.cartBox} >
                                <View style={[styles.imageView, { backgroundColor: Colors.light_white }]}>
                                    <Image source={farm} style={styles.image}
                                    ></Image>
                                </View>
                                <View style={styles.infromationView}>
                                    <Text style={styles.productName} numberOfLines={2}>Lorem Ipsum Dolar</Text>
                                    <Text style={styles.description} numberOfLines={4}>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
                                        software like Aldus PageMaker including versions of Lorem Ipsum.
                                    </Text>
                                    <OtrixDivider size={'sm'} />
                                    <TouchableOpacity>
                                        <Text style={styles.readmore}>Read More</Text>
                                    </TouchableOpacity>
                                </View>
                                {
                                    <View style={GlobalStyles.newtextView} >
                                        <Text style={GlobalStyles.newTxt}>New</Text>
                                    </View>
                                }
                            </TouchableOpacity>
                        </View>

                        <View style={styles.Box}>
                            <TouchableOpacity style={styles.cartBox} >
                                <View style={[styles.imageView, { backgroundColor: Colors.light_white }]}>
                                    <Image source={forgot} style={styles.image}
                                    ></Image>
                                </View>
                                <View style={styles.infromationView}>
                                    <Text style={styles.productName} numberOfLines={2}>Lorem Ipsum Dolar</Text>
                                    <Text style={styles.description} numberOfLines={4}>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
                                        software like Aldus PageMaker including versions of Lorem Ipsum.
                                    </Text>
                                    <OtrixDivider size={'sm'} />
                                    <TouchableOpacity>
                                        <Text style={styles.readmore}>Read More</Text>
                                    </TouchableOpacity>
                                </View>
                                {
                                    <View style={GlobalStyles.newtextView} >
                                        <Text style={GlobalStyles.newTxt}>New</Text>
                                    </View>
                                }
                            </TouchableOpacity>
                        </View>
                        {/* <View style={styles.headerContent}>
                            <View style={styles.leftButton}>
                                <Button
                                    size="md"
                                    variant="solid"
                                    bg={Colors.themeColor}
                                    style={GlobalStyles.button}
                                    onPress={() => props.navigation.navigate('RegisterFarmerScreen')}
                                >
                                    <Text style={GlobalStyles.buttonText}>Register Farm</Text>
                                </Button>
                            </View>

                            <View style={styles.rightButton}>
                                <Button
                                    size="md"
                                    variant="solid"
                                    bg={Colors.themeColor}
                                    style={GlobalStyles.button}
                                    onPress={() => login()}
                                >
                                    <Text style={GlobalStyles.buttonText}>Farmer History</Text>
                                </Button>
                            </View>
                        </View> */}
                    </OtrixContent>
            }
            <View style={styles.headerContent}>
                <View style={styles.leftButton}>
                    <Button
                        size="md"
                        variant="solid"
                        bg={Colors.themeColor}
                        style={GlobalStyles.button}
                        onPress={() => props.navigation.navigate('RegisterFarmerScreen')}
                    >
                        <Text style={GlobalStyles.buttonText}>Register Farmer</Text>
                    </Button>
                </View>

                <View style={styles.rightButton}>
                    <Button
                        size="md"
                        variant="solid"

                        style={GlobalStyles.button}
                        onPress={() => login()}
                    >
                        <Text style={GlobalStyles.buttonText}>Farmer History</Text>
                    </Button>
                </View>
            </View>
        </OtrixContainer >
  </DrawerLayoutAndroid>
    )
}

function mapStateToProps(state) {
    return {
        USER_AUTH: state.auth.USER_AUTH,
        wishlistData: state.wishlist.wishlistData,
        wishlistCount: state.wishlist.wishlistCount,
        customerData: state.auth.USER_DATA
    }
}

const mapDispatchToProps = dispatch => (
    bindActionCreators({
        addToWishList
    }, dispatch)
);


export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);

const styles = StyleSheet.create({
    headerRight: {
        flex: 0.15,
        marginRight: wp('2%'),
        justifyContent: 'center',
        alignItems: 'center',
    },
    heartIcon: {
        width: wp('6.5%'),
        height: hp('6.5%'),
        resizeMode: 'contain',
        tintColor: Colors.custom_pink,
    },
    headerCenter: {
        flex: 0.80,
        justifyContent: 'center',
        alignItems: 'center',
    },
    headingTxt: {
        fontFamily: Fonts.Font_Bold,
        fontSize: wp('6.5%'),
        color: Colors.white
    },
    headerLeft: {
        flex: 0.15,
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
    },
    bannerStyle: {
        resizeMode: 'contain',
        width: wp('100%'),
        height: hp('16%'),
        alignSelf: 'center'
    },
    avatarImg: {
        height: _roundDimensions()._height * 0.055,
        width: _roundDimensions()._height * 0.055,
        borderRadius: _roundDimensions()._borderRadius,
        marginLeft: wp('3%')
    },
    headerContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    leftButton: {
        flex: 0.40
    },
    rightButton: {
        flex: 0.40
    },

    item: {
        width: screenWidth - 55,
        height: screenWidth - 200,
        right: wp('3.5%'),
        top: hp('1%')
    },
    imageContainer: {
        flex: 1,
        marginBottom: Platform.select({ ios: 0, android: 1 }), // Prevent a random Android rendering issue
        backgroundColor: 'white',
        borderRadius: 8,
        marginHorizontal: wp('1.5%')

    },
    image: {
        ...StyleSheet.absoluteFillObject,
        resizeMode: 'cover',
    },
    catHeading: {
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: hp('1%')
    },
    Box: {
        flexDirection: 'column',
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: Colors.white,
        shadowColor: 'grey',
        shadowOffset: { width: 0, height: 0.4 },
        shadowOpacity: 0.30,
        shadowRadius: 3,
        elevation: 6,
        width: '98%',
        height: 'auto',
        marginBottom: wp('3%'),
        borderRadius: wp('2%'),
        marginHorizontal: wp('1.5%'),
        paddingBottom: hp('1%'),
        marginVertical: hp('1%')
    },

    cartBox: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        maxWidth: wp('100%'),
        flex: 1,
        backgroundColor: Colors.white,
        flexDirection: 'column'
    },
    imageView: {
        flex: 63,
        backgroundColor: Colors.light_white,
        width: wp('42.2%'),
        borderTopStartRadius: wp('2%'),
        borderTopEndRadius: wp('2%')
    },
    image: {
        resizeMode: 'cover',
        alignSelf: 'center',
        height: hp('20%'),
        width: wp('90%')
    },
    infromationView: {
        flex: 0.37,
        width: wp('100%'),
        marginVertical: hp('1%')
    },
    productName: {
        color: Colors.text_color,
        fontFamily: Fonts.Font_Semibold,
        fontSize: wp('4.5%'),
        marginHorizontal: wp('6%')
    },
    description: {
        color: Colors.secondry_text_color,
        fontFamily: Fonts.Font_Semibold,
        fontSize: wp('3.5%'),
        marginHorizontal: wp('6%')

    },
    readmore: {
        color: Colors.themeColor,
        fontFamily: Fonts.Font_Semibold,
        fontSize: wp('3.5%'),
        marginHorizontal: wp('6%')

    },
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 16
      },
      navigationContainer: {
        backgroundColor: "#ecf0f1"
      },
      paragraph: {
        padding: 16,
        fontSize: 15,
        textAlign: "center"
      },
      menu:{
    width:50,
    height:30,
    backgroundColor:"red",
    borderRadius:50
      }
});