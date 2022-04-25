import { StyleSheet} from 'react-native';  
import { Color, ThemeUtils } from '../../utils';
  
export const styles = StyleSheet.create({  
    container: {  
      flex: 1,  
      justifyContent: 'center',  
      backgroundColor: Color.BACKGROUND,  
    },  
    logoContainer: { flex: 0.3, justifyContent: 'center', alignItems: 'center', },  
    secondContainer: { flex: 0.7, marginHorizontal: ThemeUtils.relativeWidth(5) },
    input:{ backgroundColor: Color.WHITE, borderRadius: 10, paddingVertical: ThemeUtils.relativeHeight(5) },
    btnContainer:{ justifyContent: 'center', alignItems: 'center', marginTop: ThemeUtils.relativeHeight(2) },
    btn:{
      borderWidth: 2, borderColor: Color.RED, borderRadius: 20,
      paddingVertical: ThemeUtils.relativeHeight(0.8),
      paddingHorizontal: ThemeUtils.relativeWidth(8)
  },

  });  