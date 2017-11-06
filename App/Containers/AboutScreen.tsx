import React from 'react'
import { View, Text, ScrollView, Image } from 'react-native'
import Images from '../Themes/Images'
import Icon from 'react-native-vector-icons/FontAwesome'

import GradientBackgroud from '../Components/GradientBackgroud'
import styles from './Styles/AboutScreenStyles'
import Twitter from '../Components/Twitter'
import ConferenceAnnouncements from '../Components/ConferenceAnnouncements'
import CodeCamp from '../Components/CodeCamp'
import { connect } from 'react-redux'

class AboutScreen extends React.Component<{}, {}>{
    
    render() {
        return (
            <View >
                <GradientBackgroud>
                <ScrollView style={styles.tabContainer}>
                    <View style={{ flex: 1 }}>
                     
                            <CodeCamp />
                            <ConferenceAnnouncements />
                            <Twitter />
                    
                    </View>
                    </ScrollView>
                </GradientBackgroud>    
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        currentTime: new Date()
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AboutScreen)