import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import {Image} from 'react-native'
import { Colors } from '../Themes'

export default (props) => {
    const gradient = ['#4c669f', '#3b5998', '#192f6a']
    return (
        <LinearGradient colors={gradient} style={props.style}>
            {props.children}
        </LinearGradient>
    )
}
