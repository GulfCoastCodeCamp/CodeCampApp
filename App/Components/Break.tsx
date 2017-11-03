import React from 'react'
import { View, Text } from 'react-native'
interface IProp {
    title,
    start,
    duration,
}


class Break extends React.Component<IProp, {}>{
    render() {
        return (
            <View style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <View >
                    <Text>{this.props.title}</Text>
                    <Text>{this.props.start}</Text>
                    <Text>{this.props.duration}</Text>
                </View>
            </View>
        )
    }
}
export default Break;