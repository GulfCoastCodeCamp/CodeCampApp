import React, { Component } from 'react'
import { ScrollView, Text, Image, View } from 'react-native'
import DevscreensButton from '../../ignite/DevScreens/DevscreensButton.js'
import PreviousCampButton from '../../App/Components/PreviousCampButton'
import { Images ,Metrics} from '../Themes'
import GradientBackgroud from '../Components/GradientBackgroud'
// Styles
import styles from './Styles/LaunchScreenStyles'
import Video from 'react-native-video'



export default class LaunchScreen extends Component {
  constructor() {
    super();
    this.state = {
      playVideo: true
    }
  }
  componentDidMount() {
  }
  render() {
    return (
      <View style={styles.mainContainer}>
        <GradientBackgroud>
          <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
          <ScrollView style={styles.container}>

            <View style={styles.centered}>
              <Image source={Images.launch} style={styles.logo} />
            </View>

            {!this.state.playVideo && <View style={styles.section} >
              <Text style={{ fontSize: 35, fontWeight: 'bold', color: 'white', textAlign: 'center' }}>
                The cutting edge will arrive gulf coast again {'\n'}

                Fall 2018!
            </Text>
            </View>}
            {this.state.playVideo &&
              <Video
                ref={(ref) => {
                  this.player = ref
                }}
                style={{
                  marginTop: 20,
                  width: Metrics.screenWidth,
                  height: Metrics.screenWidth
                }}
                source={require('../Images/GulfCoastCodeCamp2017.mp4')}
                rate={1.0}
                muted
                paused={false}
                resizeMode="contain"
                repeat={false}
                onEnd={() => { this.setState({ playVideo: false }) }}
              />
            }

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
