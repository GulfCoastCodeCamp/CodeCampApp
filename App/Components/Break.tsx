import React from 'react'
import { View, Text, Image } from 'react-native'
interface IProp {
    title,
    start,
    duration,
    type
}
interface IState {
    imageWidth: number
}
import { Images, Colors, Metrics } from '../Themes'
import { format } from 'date-fns'

class Break extends React.Component<IProp, IState>{


    render() {
        const { type } = this.props;
        const background = Images[type]
        const imageWidth = Metrics.screenWidth - 12
        const backgroundHeight = Metrics.breakHeight + 20
        return (
            <View style={{
                flex: 1,
                marginVertical: Metrics.baseMargin,
                marginHorizontal: Metrics.doubleBaseMargin,
                marginLeft: 6,
                marginRight: 6,
                borderRadius: 5,
                shadowOffset: {
                    width: 1,
                    height: 1
                },
                shadowRadius: 5,
                shadowColor: Colors.redShadow,
                shadowOpacity: 1
            }}>
                <Image source={background} style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    width: imageWidth,
                    height: backgroundHeight,
                    borderRadius: 5,
                    opacity:0.6
                }} resizeMode="cover" />
                <View style={{
                    marginVertical: Metrics.baseMargin,
                    marginHorizontal: Metrics.doubleBaseMargin,
                    backgroundColor: Colors.transparent,
                    height: Metrics.breakHeight,
                    padding: 10
                }} >

                    <Text style={{
                        fontSize: 25,
                        fontWeight: '800',
                        color: Colors.snow,
                        marginLeft:20

                    }}>{this.props.title}</Text>
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        <Text style={{
                            fontSize: 20,
                            color: Colors.snow,
                            margin:20
                        }}>{format(this.props.start, 'h:mmA')}</Text>
                        <Text style={{
                            fontSize: 20,
                            color: Colors.snow,
                            margin:20
                        }}>{`${this.props.duration} Minutes`}</Text>
                    </View>
                </View>
            </View>
        )
    }
}
export default Break;