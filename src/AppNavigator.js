import React from 'react';
import { Platform, StyleSheet, Image, Text, View } from 'react-native';
import { NavigationContainer, createNavigationContainerRef } from "@react-navigation/native";
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { connect } from 'react-redux';
import {
    SplashScreen, HomeScreen, LoginScreen, RegisterScreen, RegisterSuccessScreen, LanguageScreen, AuthrizeGIScreen, GIDetailsMessageScreen, LoginRegisterOptionScreen, ForgotPasswordScreen,
    LoginRegisterOptionScreenVRP, LoginScreenOTP, ProfileScreen, NewsScreen, CropAdvisoryScreen, RegisterFarmerScreen,CropDetails
} from './screens/index';
import { bottomHome, bottomHomeFill, agriculture, agriculture_fill, news, news_fill, bottomCart, bottomProfile, bottomProfileFill, bottomSetting, bottomSettingFill } from '@common';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Colors, GlobalStyles } from '@helpers';
import { Badge } from "native-base"
import Fonts from './helpers/Fonts';
import { _roundDimensions } from './helpers/util';
import SoilTesting from './screens/SoilTesting';
import CropSummaryScreen from './screens/CropSummaryScreen';
import Settings from './screens/SettingsScreen';
const SettingStack = createStackNavigator();
export const navigationRef = createNavigationContainerRef()
let cartCount = 0;

export function navigate(name, params) {
    if (navigationRef.isReady()) {
        navigationRef.navigate(name, params);
    }
}

//Auth Stack
const AuthStack = createStackNavigator();
function AuthNavigator() {
    return (
        <AuthStack.Navigator initialRouteName="LoginScreen">
            <AuthStack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }} />
            <AuthStack.Screen name="RegisterScreen" component={RegisterScreen} options={{ headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }} />
            <AuthStack.Screen name="ForgotPasswordScreen" component={ForgotPasswordScreen} options={{ headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }} />
        </AuthStack.Navigator>
    );
}

const BottomTab = createMaterialBottomTabNavigator();
function MyTabs(props) {
    let cartCount = props.cartCounts;
    let authStatus = props.auth;
    return (
        <BottomTab.Navigator
            initialRouteName="HomeScreen"
            backBehavior={'order'}
            labeled={false}
            barStyle={styles.tabbarStyle}
            screenOptions={{
                // tabBarStyle: { position: 'absolute' },
                unmountOnBlur: true,
                tabBarShowLabel: false,
                lazy: false,
                // tabBarStyle: styles.tabbarStyle
            }}>
            <BottomTab.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }}
                options={{
                    headerShown: false,
                    cardStyleInterpolator: CardStyleInterpolators.forScaleFromCenterAndroid,
                    tabBarIcon: ({ focused, tintColor }) => (
                        <Image
                            square
                            source={focused ? bottomHomeFill : bottomHome}
                            style={[styles.bottomTabIcon]}
                        />
                    ),
                }} />

            <BottomTab.Screen name="NewsScreen" component={NewsScreen} options={{ headerShown: false }}
                options={{
                    headerShown: false,
                    cardStyleInterpolator: CardStyleInterpolators.forScaleFromCenterAndroid,
                    tabBarIcon: ({ focused, tintColor }) => (
                        <Image
                            square
                            source={focused ? news_fill : news}
                            style={[styles.bottomTabIcon]}
                        />
                    ),
                }} />

            <BottomTab.Screen name="CropAdvisoryScreen" component={CropAdvisoryScreen} options={{ headerShown: true }}
                options={{
                    headerShown: true,
                    cardStyleInterpolator: CardStyleInterpolators.forScaleFromCenterAndroid,
                    tabBarIcon: ({ focused, tintColor }) => (
                        <Image
                            square
                            source={focused ? agriculture_fill : agriculture}
                            style={[styles.bottomTabIcon]}
                        />
                    ),
                }} />

            <BottomTab.Screen name="ProfileScreen" component={ProfileScreen} options={{ headerShown: false }}
                options={{
                    headerShown: false,
                    cardStyleInterpolator: CardStyleInterpolators.forScaleFromCenterAndroid,
                    tabBarIcon: ({ focused, tintColor }) => (
                        <Image
                            square
                            source={focused ? bottomProfileFill : bottomProfile}
                            style={[styles.bottomTabIcon]}
                        />
                    ),
                }} />


        </BottomTab.Navigator >
    );
}

const Stack = createStackNavigator();
function AppNavigator(props) {
    const { cartCount, authStatus } = props;
    return (
        <NavigationContainer ref={navigationRef}>
            <Stack.Navigator initialRouteName="SplashScreen">
                <Stack.Screen name='SplashScreen' component={MyTabs}
                    options={{
                        headerShown: false,
                    }}
                />
                {/* <Stack.Screen {...props} name="MainScreen" component={() => <MyTabs cartCounts={cartCount} auth={authStatus}></MyTabs>} options={{ headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS, }} countProp={cartCount} initialParams={{ 'count': cartCount }} /> */}

                <Stack.Screen {...props} name="MainScreen" options={{ headerShown: false, }} >
                    {props => <MyTabs cartCounts={cartCount} auth={authStatus} />}
                </Stack.Screen>
                <Stack.Screen name="LoginScreen" component={AuthNavigator} options={{ headerShown: false, }} />
                <Stack.Screen name="LanguageScreen" component={LanguageScreen} options={{
                    headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                }} />
                <Stack.Screen name="RegisterScreen" component={RegisterScreen} options={{
                    headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                }} />
                <Stack.Screen name="RegisterSuccessScreen" component={RegisterSuccessScreen} options={{
                    headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                }} />
                <Stack.Screen name="AuthrizeGIScreen" component={AuthrizeGIScreen} options={{
                    headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                }} />
                <Stack.Screen name="GIDetailsMessageScreen" component={GIDetailsMessageScreen} options={{
                    headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                }} />
                <Stack.Screen name="LoginRegisterOptionScreen" component={LoginRegisterOptionScreen} options={{
                    headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                }} />
                <Stack.Screen name="LoginRegisterOptionScreenVRP" component={LoginRegisterOptionScreenVRP} options={{
                    headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                }} />
                <Stack.Screen name="LoginScreenOTP" component={LoginScreenOTP} options={{
                    headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                }} />
                <Stack.Screen name="RegisterFarmerScreen" component={RegisterFarmerScreen} options={{
                    headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                }} />
                <Stack.Screen name="CropDetails" component={CropDetails} options={{
                    headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                }} />
                 <Stack.Screen name="SoilTesting" component={SoilTesting} options={{
                    headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                }} />
                 <Stack.Screen name="CropSummaryScreen" component={CropSummaryScreen} options={{
                    headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                }} />
                {/* <Stack.Screen name="SettingScreen" component={Settings} options={{
                    headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                }} /> */}


            </Stack.Navigator>
        </NavigationContainer>
    )
}

function mapStateToProps(state) {
    return {
        cartCount: state.cart.cartCount ? state.cart.cartCount : null,
        authStatus: state.auth.USER_AUTH
    }
}

export default connect(mapStateToProps, {})(AppNavigator);


const styles = StyleSheet.create({
    bottomTabIcon: {
        height: wp('6%'),
        width: wp('6%'),
    },
    tabbarStyle: {
        backgroundColor: Colors.white,
    },
    cartIconView: {
        backgroundColor: Colors.light_white,
        height: _roundDimensions()._height * 0.068,
        width: _roundDimensions()._height * 0.068,
        borderRadius: _roundDimensions()._borderRadius,
        justifyContent: 'center',
        alignItems: 'center',
        bottom: hp('2%'),
        position: 'relative',
        zIndex: 9999999999
    },
    count: {
        backgroundColor: Colors.white,
    },
    countText: {
        color: Colors.link_color,
        fontFamily: Fonts.Font_Bold
    }
});