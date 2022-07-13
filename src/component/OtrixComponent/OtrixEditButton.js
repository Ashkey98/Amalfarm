import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Colors } from '@helpers'
import { _roundDimensions } from '@helpers/util'
import { edit } from '@common';

function EditButton() {
    return (
        <View >
            <Image source={edit} style={styles.backButton} tintColor='white'/>
        </View>
    )
}

export default OtirxEditButton = React.memo(EditButton);

const styles = StyleSheet.create({
    
    backButton: {
        height: _roundDimensions()._height * 0.045,
        width: _roundDimensions()._height * 0.046,
    }

});