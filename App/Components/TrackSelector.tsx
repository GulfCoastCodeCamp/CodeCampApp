import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import styles from './Styles/TrackSelector'

const DayToggle = props => {
    const { track, onPressIn } = props
    const dayStyle = (day) =>
        track === day ? styles.activeDay : styles.inactiveDay

    return (
        <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            locations={[0.0, 0.38, 1.0]}
            colors={['#858F99', '#828791', '#626873']}
            style={styles.headerGradient}>
            <View style={styles.dayToggle}>
                <TouchableOpacity onPressIn={() => onPressIn(0)}>
                    <Text style={dayStyle(0)}>Web/Mobile</Text>
                </TouchableOpacity>
                <TouchableOpacity onPressIn={() => onPressIn(1)}>
                    <Text style={dayStyle(1)}>Cloud/DevOps</Text>
                </TouchableOpacity>
                <TouchableOpacity onPressIn={() => onPressIn(2)}>
                    <Text style={dayStyle(2)}>Data</Text>
                </TouchableOpacity>
                <TouchableOpacity onPressIn={() => onPressIn(3)}>
                    <Text style={dayStyle(3)}>Emerging Techs</Text>
                </TouchableOpacity>
            </View>
        </LinearGradient>
    )
}

export default DayToggle
