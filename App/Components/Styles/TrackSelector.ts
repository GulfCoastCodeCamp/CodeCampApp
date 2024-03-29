import { StyleSheet } from 'react-native'
import { Colors, Metrics } from '../../Themes/'

export default StyleSheet.create({
    headerGradient: {
        shadowOffset: {
            width: 0,
            height: 0
        },
        shadowRadius: 20,
        shadowColor: 'black',
        shadowOpacity: 0.8,
        elevation: 20,
        backgroundColor: 'black'
    },
    dayToggle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingTop: Metrics.doubleBaseMargin,
        height: 85,
        backgroundColor: Colors.clear
    },
    inactiveDay: {
        minWidth:50,
        marginTop:10,
        height:25,
        backgroundColor: Colors.clear,
        // fontFamily: 'Montserrat-Light',
        fontSize: 8,
        color: 'rgba(255,255,255,0.80)',
        letterSpacing: 0
    },
    activeDay: {
        minWidth: 50,
        marginTop: 10,
        height: 25,
        backgroundColor: Colors.clear,
        // fontFamily: 'Montserrat-SemiBold',
        fontSize: 15,
        color: Colors.snow,
        letterSpacing: 0
    }

})
