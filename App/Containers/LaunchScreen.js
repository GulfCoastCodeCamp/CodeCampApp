import React, { Component } from 'react'
import { ScrollView, Text, Image, View } from 'react-native'
import DevscreensButton from '../../ignite/DevScreens/DevscreensButton.js'
import PreviousCampButton from '../../App/Components/PreviousCampButton'
import { Images } from '../Themes'

// Styles
import styles from './Styles/LaunchScreenStyles'

export default class LaunchScreen extends Component {
  render () {
    return (
      <View style={styles.mainContainer}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
        <ScrollView style={styles.container}>
          <View style={styles.centered}>
            <Image source={Images.launch} style={styles.logo} />
          </View>

          <View style={styles.section} >
            <Text style={{ fontSize: 35, fontWeight: 'bold', color:'white' ,textAlign:'center'} }>
              The cutting edge will arrive gulf coast again {'\n'}
              
               Fall 2018!
            </Text>
          </View>
          <PreviousCampButton>
            Check 2017
          </PreviousCampButton>
          <DevscreensButton />
        </ScrollView>
      </View>
    )
  }
}
