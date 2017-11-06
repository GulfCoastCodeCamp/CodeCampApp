import React from 'react'
import { View, Text, Image, Linking, TouchableOpacity } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import RoundedButton from './RoundedButton'
import { Images } from '../Themes'
import styles from './Styles/CodeCampStyles'
import Icon from 'react-native-vector-icons/FontAwesome'

const twitterus = () => {
  const appURL = 'twitter://post?screen_name=gccodecamp'
  const webURL = 'https://twitter.com/intent/user?screen_name=gccodecamp'
  Linking.canOpenURL(appURL).then((supported) =>
    Linking.openURL(supported ? appURL : webURL)
  )
}

const facebookus = () => {
  const appURL = 'facebook://gccodecamp'
  const webURL = 'https://www.facebook.com/gccodecamp/'
  Linking.canOpenURL(appURL).then((supported) =>
    Linking.openURL(supported ? appURL : webURL)
  )
}
const CodeCamp = (props) => {
  const gradient = ['#351F41', '#8E2044']

  return (
    <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={{ flex: 1 } }>

      <View
        style={styles.infiniteRed}>
        {/* <Image source={Images.shelbyhall} style={{
          position: 'absolute',
          top: 0,
          left: 0,
          bottom: 0,
          right: 0
        }}resizeMode="cover" />   */}
        <Text style={styles.heading}>Brought to you by:</Text>
        <Image style={styles.infiniteRedIcon} source={Images.codeCamp} />
        <View style={styles.line} />
        <Text style={styles.subheading}>Keep the conversation going by{'\n'}connecting with Gulf Coast Code Camp</Text>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <TouchableOpacity onPress={() => twitterus()} style={{ margin: 10, backgroundColor: 'transparent' }}>
            <Icon name="twitter" size={35} color="white" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => facebookus()} style={{ margin: 10, backgroundColor: 'transparent' }}>
            <Icon name="facebook" size={35} color="white" />
          </TouchableOpacity>

        </View>

      </View>
    </LinearGradient>
  )
}

export default CodeCamp
