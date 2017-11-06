import React from 'react'
import { View, Text,Image } from 'react-native'
import { Images, Metrics } from '../Themes'
import styles from './Styles/AnnouncementStyle'
import LinearGradient from 'react-native-linear-gradient'

const ConferenceAnnouncements = (props) => {
  return (
    <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={{flex:1}}>
    <View
      style={styles.announcement}>
      <Text style={styles.heading}>THANK YOU</Text>
      <Text style={styles.subheading}>We'll see you again next year</Text>
    </View>
    </LinearGradient>
  )
}

export default ConferenceAnnouncements
