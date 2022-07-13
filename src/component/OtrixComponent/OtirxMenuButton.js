import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Colors } from '@helpers'
import { _roundDimensions } from '@helpers/util'
import { drawerIcon } from '@common';

function MenuButton() {
    return (
        <View >
            <Image source={drawerIcon} style={styles.backButton} tintColor='white'/>
        </View>
    )
}

export default OtirxMenuButton = React.memo(MenuButton);

const styles = StyleSheet.create({
    
    backButton: {
        height: _roundDimensions()._height * 0.022,
        width: _roundDimensions()._height * 0.044,
    }

});