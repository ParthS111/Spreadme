import React from 'react';

import {StyleSheet} from 'react-native';
import{ThemeUtils} from '../../../utils'
import DeviceInfo from 'react-native-device-info';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
const isTablet = DeviceInfo.isTablet();
export const styles = StyleSheet.create({

    icon: {
        position: 'absolute',
        // top: ThemeUtils.relativeHeight(1.2),
        right: 0,
        top: isTablet ? ThemeUtils.relativeHeight(0.6) : 16,
    
    },
    FloatingInputText_Icon: {
        flex: 0.2,
        paddingTop: 30
    }

});