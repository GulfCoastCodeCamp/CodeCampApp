import React from 'react'
import { View, Image, TouchableOpacity, Text, Linking } from 'react-native'
import { Images } from '../Themes'
import styles from './Styles/TwitterStyles'
import Icon from 'react-native-vector-icons/FontAwesome'
import LinearGradient from 'react-native-linear-gradient'

const tweetWithHashtag = () => {
    const appURL = 'twitter://post?hashtags=gulfcoastcodecamp'
    const webURL = 'https://twitter.com/intent/tweet?hashtags=gulfcoastcodecamp'
    Linking.canOpenURL(appURL).then((supported) =>
        Linking.openURL(supported ? appURL : webURL)
    )
}

const Twitter = (props) => {
    return (
        <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={{ flex: 1 }}>
            <View style={styles.twitter}>
                <Icon name='twitter' size={30} color='white' />

                {/* <Image style={styles.blowhorn} source={Images.blowhorn} /> */}
                <TouchableOpacity onPress={() => tweetWithHashtag()}>
                    <Text style={styles.heading}>
                        #GulfCoastCodeCamp
                </Text>
                </TouchableOpacity>
                <Text style={styles.description}>
                    Make your friends jealous by tweeting, posting,
        or whatever it is you do with the hashtag&nbsp;
        <Text style={styles.hashtag} onPress={() => tweetWithHashtag()}>
                        #GulfCoastCodeCamp
        </Text>.
      </Text>
            </View>

        </LinearGradient>
    )
}

export default Twitter
