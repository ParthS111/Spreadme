import { StyleSheet } from 'react-native'
import { Color, ThemeUtils } from '../../utils'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        // backgroundColor: Color.BACKGROUND,  
    },
    center: {
        justifyContent: 'center', alignItems: 'center'
    },
    card: {
        height: ThemeUtils.relativeHeight(14),
        width: ThemeUtils.relativeWidth(80),
        borderRadius: 10,
        backgroundColor: '#fff',
        elevation: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        shadowColor: '#000',
        alignItems: 'center',
        justifyContent: "center"
    },
    btn:{
        borderWidth: 2, borderColor: Color.BLACK, borderRadius: 5,
        paddingVertical: ThemeUtils.relativeHeight(0.8),
        paddingHorizontal: ThemeUtils.relativeWidth(8),
        backgroundColor:Color.BLACK
    },
    dropdwonStyle: {
        backgroundColor: Color.WHITE,
        borderWidth: 1,
        borderColor: Color.BACKGROUND,
        paddingHorizontal:5 ,
      },
      dwLabel: {
        fontSize: 19,
        color: Color.DARK_GREY,
        alignItems: 'center',
        marginLeft: 20
        
      },
      dwStyle: { backgroundColor: Color.WHITE, height: 300, marginTop: ThemeUtils.relativeHeight(2), borderRadius: 10 },
      toast: { marginTop: ThemeUtils.relativeHeight(8) },
     
      dropdownImg: {
        width: ThemeUtils.relativeHeight(1.5),
        height: ThemeUtils.relativeHeight(2),
        // paddingRight: 20
        marginRight: 10
        // marginRight: 5
    
      },
})