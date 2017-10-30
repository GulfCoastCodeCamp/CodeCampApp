import { StyleSheet } from 'react-native'
import { Colors, ApplicationStyles, Metrics } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    paddingBottom: Metrics.baseMargin
  },
  header: {
    backgroundColor: Colors.backgroundColor
  },
  tabBar: {
    height: 54,
    paddingTop: 5,
    paddingBottom: 1,
    paddingHorizontal: 28,
    borderTopWidth: 1,
    // borderTopColor: 'rgba(255,255,255,0.3)',
    // backgroundColor: Colors.blue
  },
  tabBarLabel: {
    // fontFamily: 'Montserrat-Medium',
    fontSize: 9,
    letterSpacing: 0,
    color: Colors.ember
  },
  card: {
    opacity: 1,
    // backgroundColor: Colors.darkBlue
  }
})
