import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { Colors } from '../Themes'

export default (props) => {
    const gradient = ['#555A63', '#25262B']
    return (
        <LinearGradient colors={gradient} style={props.style}>
            {props.children}
        </LinearGradient>
    )
}
