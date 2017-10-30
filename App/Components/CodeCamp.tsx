import React from 'react'
import { View, Text, Image, Linking } from 'react-native'
// import LinearGradient from 'react-native-linear-gradient'
import RoundedButton from './RoundedButton'
import { Images } from '../Themes'
import styles from './Styles/CodeCampStyles'

const CodeCamp = (props) => {
  const gradient = ['#351F41', '#8E2044']

  return (
    <View
      style={styles.infiniteRed}>
      <Text style={styles.heading}>Brought to you by:</Text>
      <Image style={styles.infiniteRedIcon} source={Images.codeCamp} />
      <View style={styles.line} />
      <Text style={styles.subheading}>Keep the conversation going by{'\n'}connecting with Gulf Coast Code Camp</Text>
    </View>
  )
}

export default CodeCamp
