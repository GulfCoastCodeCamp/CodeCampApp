import React, { Component } from 'react'
import { ScrollView, Text, Image, View, Linking } from 'react-native'
import DevscreensButton from '../../ignite/DevScreens/DevscreensButton.js'
import PreviousCampButton from '../../App/Components/PreviousCampButton'
import { Images, Metrics } from '../Themes'
import GradientBackgroud from '../Components/GradientBackgroud'
// Styles
import styles from './Styles/LaunchScreenStyles'
import * as Animatable from 'react-native-animatable'
import RoundedButton from '../Components/RoundedButton.js';

const regiesterNow = () => {
  const webURL = 'https://www.gulfcoastcodecamp.com/';
  Linking.openURL(webURL);
}


export default class LaunchScreen extends Component {


  render() {
    return (
      <View style={styles.mainContainer}>
        <GradientBackgroud>
          <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
          <ScrollView style={styles.container}>
            <View style={styles.centered}>
              <Image source={Images.launch} style={styles.logo} />
            </View>
            <Animatable.View
              animation='zoomIn'
              iterationCount={1}
              style={styles.section} >
              <Text style={{ fontSize: 30, fontWeight: 'bold', color: 'white', textAlign: 'center', marginTop: Metrics.marginVertical }}>
                Immerse yourself in techologies with Gulf Coast Code Camp at downtown Mobile Alabama this Fall!
              </Text>
            </Animatable.View>

            <RoundedButton onPress={() => regiesterNow()}>
              Register Now
            </RoundedButton>

            <PreviousCampButton>
              Gulf Coast Code Camp 2017
            </PreviousCampButton>
            <DevscreensButton />
          </ScrollView>

        </GradientBackgroud>

      </View>
    )
  }
}
