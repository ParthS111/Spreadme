import React from 'react';
import {PixelRatio, Platform, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');
const realWidth = height > width ? width : height;
const isIphoneX = () => {
    let d = Dimensions.get('window');
    const { height, width } = d;
    return (
        // This has to be iOS duh
        Platform.OS === 'ios' &&
        !Platform.isPad &&
        !Platform.isTVOS &&

        // Accounting for the height in either orientation
        (height === 812 || width === 812)
    );
}
const FORTAB = width < 1025 && width > 721;
const getStatusBarHeight = () => {
    return Platform.select({
        ios : isIphoneX() ? 44 : 20,
        android: 0
    })
}

const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;
const STATUSBAR_HEIGHT = getStatusBarHeight();
const NAV_HEIGHT = APPBAR_HEIGHT + STATUSBAR_HEIGHT;
const TAB_HEIGHT = 49;

const myWidth = Dimensions.get('window').width;
const myHeight = Dimensions.get('window').height;

const relativeWidth = num => (myWidth * num) / 100;
const relativeHeight = num => (myHeight * num) / 100;



const dpi = PixelRatio.get();

export const getDpiFontSizeFromPx = (pixcelSize) => {
    let fontSizeDpi = pixcelSize / dpi;
    return PixelRatio.getPixelSizeForLayoutSize(fontSizeDpi);
}
// roundToNearestPixel

const fontBaseXXSmall= PixelRatio.roundToNearestPixel(9);
const fontBaseXSmall = PixelRatio.roundToNearestPixel(13);
const fontBaseSmall = PixelRatio.roundToNearestPixel(15);
const fontBaseNormal = PixelRatio.roundToNearestPixel(17);
const fontBaseLarge = PixelRatio.roundToNearestPixel(22);
const fontBaseXLarge = PixelRatio.roundToNearestPixel(23);
const fontBaseXXLarge = PixelRatio.roundToNearestPixel(27);


const isTablet = () => {
    let pixelDensity = PixelRatio.get();
    let adjustedWidth = width * pixelDensity;
    let adjustedHeight = height * pixelDensity;
    if (pixelDensity < 2 && (adjustedWidth >= 1000 || adjustedHeight >= 1000)) {
        return true;
    } else return pixelDensity === 2 && (adjustedWidth >= 1920 || adjustedHeight >= 1920);
};

const responsiveFontSize = (fontSize) => {
    let divider = isTablet() ? 600 : 375;
    return Math.round(fontSize * realWidth / divider);
};

const fontXXSmall = responsiveFontSize(fontBaseXXSmall);
const fontXSmall = responsiveFontSize(fontBaseXSmall);
const fontSmall = responsiveFontSize(fontBaseSmall);
const fontNormal = responsiveFontSize(fontBaseNormal);
const fontLarge = responsiveFontSize(fontBaseLarge);
const fontXLarge = responsiveFontSize(fontBaseXLarge);
const fontXXLarge = responsiveFontSize(fontBaseXXLarge);

const responsiveHeight = (height) => {
    if (!isTablet())
        return height;
    else
        return (height + (height * 0.25));
};

export const circleStyle = {
    height: responsiveHeight(70),
    width:responsiveHeight(70),
    borderRadius: responsiveHeight(35)
};

export default {
    FORTAB,fontXXSmall,fontXSmall, fontSmall, fontNormal, fontLarge, fontXLarge, fontXXLarge, NAV_HEIGHT, responsiveHeight,
    relativeWidth, relativeHeight,STATUSBAR_HEIGHT,isIphoneX,getStatusBarHeight,responsiveFontSize
};