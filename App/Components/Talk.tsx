import React from 'react'
import { Animated, View, Text, TouchableWithoutFeedback, Image, TouchableOpacity, Linking } from 'react-native'
import styles from './Styles/TalkStyles'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Metrics } from '../Themes'
import { format } from 'date-fns'

interface IProp {
    name,
    title,
    avatarURL,
    start,
    duration,
    speakerInfo,
    style,
    onPress(): void
}

interface IState {
    animatedSize: Animated.Value
}

class Talk extends React.Component<IProp, IState>{
    twitterus = (handler) => {
        const appURL = 'twitter://post?screen_name=' + handler
        const webURL = 'https://twitter.com/intent/user?screen_name=' + handler
        Linking.canOpenURL(appURL).then((supported) =>
            Linking.openURL(supported ? appURL : webURL)
        )
    }


    renderTwitter = (speakerInfo: any) => {
        if (speakerInfo && speakerInfo[0] && speakerInfo[0].twitter) {
            return (<TouchableOpacity style={{ margin: 10 }} onPress={() => { this.twitterus(speakerInfo[0].twitter) }}>
                <Icon name="twitter" size={35} color="lightblue" />
            </TouchableOpacity>)
        }
    }


    constructor() {
        super();
        this.state = {
            animatedSize: new Animated.Value(1)
        }
    }

    handlePressIn = () => {
        Animated.spring(this.state.animatedSize, {
            toValue: 1.05,
            useNativeDriver: true
        }).start()
    }

    handlePressOut = () => {
        Animated.spring(this.state.animatedSize, {
            toValue: 1,
            friction: 5,
            useNativeDriver: true
        }).start()
    }

    render() {
        const {
            name,
            title,
            avatarURL,
            start,
            duration,
            speakerInfo
        } = this.props

        const animatedStyle = {
            transform: [{ scale: this.state.animatedSize }]
        }

        const containerStyles = [
            styles.container,
            styles.active,
            animatedStyle
        ]
        return (
            <View>
                <TouchableWithoutFeedback style={{
                    flex: 1,
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
                    onPressIn={this.handlePressIn}
                    onPressOut={this.handlePressOut}
                    onPress={this.props.onPress}>

                    <Animated.View style={containerStyles}>
                        <View style={styles.info}>
                            <View style={styles.infoText}>
                                <Text style={styles.name}>{name}</Text>
                                <Text style={styles.title}>{title}</Text>
                            </View>
                            <Icon name="user-circle" color="lightblue" size={60} />

                        </View>
                        <View style={{
                            flex: 1,
                            flexDirection: 'row',
                            alignItems: 'center',
                            marginLeft: Metrics.doubleBaseMargin,
                            marginRight: Metrics.doubleBaseMargin
                        }}>
                            <View style={{
                                flex: 1, flexDirection: 'column'
                            }}>
                                <Text>Start</Text>
                                <Text style={{ fontWeight: '800' }}>{format(start, 'h:mmA')}</Text>
                            </View>
                            <View style={{
                                flex: 1, flexDirection: 'column'
                            }}>
                                <Text>Duration</Text>
                                <Text style={{ fontWeight: '800' }}>{`${duration} Minutes`}</Text>
                            </View>
                            {this.renderTwitter(speakerInfo)}

                        </View>
                    </Animated.View>
                </TouchableWithoutFeedback>
            </View>
        );
    }
}

export default Talk;