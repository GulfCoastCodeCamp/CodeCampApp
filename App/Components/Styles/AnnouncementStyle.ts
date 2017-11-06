import { StyleSheet, ViewStyle, TextStyle } from 'react-native'
import { Colors, Fonts, Metrics } from '../../Themes/'

interface AnnouncementStyleType {
    announcement: ViewStyle
    heading: ViewStyle
    subheading: ViewStyle
}

const AnnouncementStyle: AnnouncementStyleType = {
    announcement: {
        flex: 1,
        marginTop: 10
    },
    heading: {
        fontFamily: Fonts.type.description,
        fontSize: 35,
        letterSpacing: 0.2,
        backgroundColor: Colors.transparent,
        color: '#FDE5FF',
        textAlign: 'center',
        marginTop: 10
    },
    subheading: {
        marginBottom: 30,
        marginTop:30,
        fontFamily: Fonts.type.description,
        fontSize: 25,
        letterSpacing: 0.5,
        backgroundColor: Colors.transparent,
        color: Colors.snow,
        textAlign: 'center'
    }
}

export default AnnouncementStyle
