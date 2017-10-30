import React from 'react'
import { View, Text,Image } from 'react-native'
import { Images, Metrics } from '../Themes'
import Announcement from './Announcement'
import styles from './Styles/AnnouncementStyle'

const ConferenceAnnouncements = (props) => {
  return (
    <View
      style={styles.announcement}>
      <Text style={styles.heading}>THANK YOU</Text>
      <Text style={styles.subheading}>We'll see you again next year</Text>
    </View>
  )
}

export default ConferenceAnnouncements
