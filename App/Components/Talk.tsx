import React from 'react'
import { Animated, View, Text, TouchableWithoutFeedback, Image, TouchableOpacity } from 'react-native'
import FadeIn from 'react-native-fade-in-image'
import styles from './Styles/TalkStyles'

interface IProp {
    name,
    title,
    avatarURL,
    start,
    duration,
    style,
    onPress(): void
}

interface IState {
    animatedSize: Animated.Value
}

class Talk extends React.Component<IProp, IState>{


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
            duration

        } = this.props

        const animatedStyle = {
            transform: [{ scale: this.state.animatedSize }]
        }

        const containerStyles = [
            styles.container,
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
                            {/* <FadeIn>
                                <Image style={styles.avatar} source={{ uri: avatarURL }} />
                            </FadeIn> */}

                        </View>
                        <View style={{
                            flex: 1,
                            flexDirection: 'row'
                        }}>
                            <Text>Start</Text>
                            <Text>{start}</Text>
                            <Text>Duration</Text>
                            <Text>{duration}</Text>
                            <TouchableOpacity>
                                <Text>Twitter</Text>
                            </TouchableOpacity>
                        </View>
                    </Animated.View>
                </TouchableWithoutFeedback>
            </View>
        );
    }
}

export default Talk;