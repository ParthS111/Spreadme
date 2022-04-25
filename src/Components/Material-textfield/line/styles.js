import { StyleSheet } from 'react-native';
import { ThemeUtils } from '../../../../utils'
export default StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: 'white'
  },
  line: {
    position: 'absolute',
    top: -2,
    left: -1.5,
    right: -1.5,
    bottom: 0,
    borderWidth: 1,
  },
  middleView: {
    flexDirection: 'row',
    //marginVertical: ThemeUtils.relativeHeight(3),
    width: ThemeUtils.relativeWidth(70),
    marginTop: ThemeUtils.relativeHeight(5)
  },
  subContainer: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: ThemeUtils.relativeWidth(8)
  },
  title: {
    flex: 1, marginTop: ThemeUtils.relativeHeight(10)
  },
  boardingImg: {
    height: ThemeUtils.relativeHeight(50),
    width: ThemeUtils.relativeHeight(50)
  },
  swiperView: {
    alignItems: 'center',
    marginTop: ThemeUtils.relativeHeight(5),
  }
});
