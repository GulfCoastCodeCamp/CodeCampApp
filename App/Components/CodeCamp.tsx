import React from 'react'
import { View, Text, Image, Linking, TouchableOpacity} from 'react-native'
// import LinearGradient from 'react-native-linear-gradient'
import RoundedButton from './RoundedButton'
import { Images } from '../Themes'
import styles from './Styles/CodeCampStyles'
import Icon from 'react-native-vector-icons/FontAwesome'

const twitterus= () => {
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
    <View
      style={styles.infiniteRed}>
      <Text style={styles.heading}>Brought to you by:</Text>
      <Image style={styles.infiniteRedIcon} source={Images.codeCamp} />
      <View style={styles.line} />
      <Text style={styles.subheading}>Keep the conversation going by{'\n'}connecting with Gulf Coast Code Camp</Text>
      <TouchableOpacity onPress={() => twitterus()}>
        <Icon name="twitter" size={35} />  
      </TouchableOpacity>
      <TouchableOpacity onPress={() => facebookus()}>
        <Icon name="facebook" size={35} />
      </TouchableOpacity>
    </View>
  )
}

export default CodeCamp
