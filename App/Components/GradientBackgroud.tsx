import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { Colors } from '../Themes'

export default (props) => {
    const gradient = [Colors.blue, Colors.darkBlue]
    return (
        <LinearGradient colors={gradient} style={props.style}>
            {props.children}
        </LinearGradient>
    )
}