import {Platform, NetInfo} from 'react-native';
import {Color} from './Color'
import DateUtils from './DateUtils'
// import Messages from './MessageUtils'
import Constants from './Constants'
import CommonStyle from './CommonStyles'
import ThemeUtils from './ThemeUtils'
import {validation, PasswordValidate} from './ValidationUtils'

const {
    Version,
    OS,
} = Platform;

export const IS_ANDROID = OS === 'android';
export const IS_IOS = OS === 'ios';
export const IS_LT_LOLLIPOP = Version < 21;


// use for check internet connection
export const isNetworkConnected = () => {
    if (Platform.OS === 'ios') {
        return new Promise(resolve => {
            const handleFirstConnectivityChangeIOS = isConnected => {
                NetInfo.isConnected.removeEventListener('change', handleFirstConnectivityChangeIOS);
                resolve(isConnected);
            };
            NetInfo.isConnected.addEventListener('change', handleFirstConnectivityChangeIOS);
        });
    }

    return NetInfo.isConnected.fetch();

};
export default {
    isNetworkConnected,
}

export {
    Color,
    DateUtils,
    // Messages,
    Constants,
    CommonStyle,
    ThemeUtils,
    validation,
    PasswordValidate
};