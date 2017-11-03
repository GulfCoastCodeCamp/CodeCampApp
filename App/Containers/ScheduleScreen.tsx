import React from 'react'
import { View, Text, Image, ScrollView, FlatList } from 'react-native'

import { Images } from '../Themes'
import styles from './Styles/AboutScreenStyles'
import TrackSelector from '../Components/TrackSelector'
import {
    filter,
    sum,
    map
} from 'ramda'
import Talk from '../Components/Talk'
import Break from '../Components/Break'
import GradientBackgroud from '../Components/GradientBackgroud'
import Icon from 'react-native-vector-icons/FontAwesome'
import data from '../../Features/schedules'
interface IState {

    activeTrack: number
}

interface IProp {
    navigation: any
}


class ScheduleScreen extends React.Component<IProp, IState> {

    static navigationOptions = {
        tabBarLabel: 'Schedule',
        tabBarIcon: ({ focused }) => (
            <Icon name='calendar' size={30} color={focused ? 'blue' : 'lightblue'} />
        )
    }
    /**
     *
     */
    constructor() {
        super();
        this.state = {
            activeTrack: 0
        };
    }

    setActiveTrack = (track: number) => {
        this.setState({ activeTrack: track });
    }

    getItemLayout = (data, index) => {
        const item = data[index]
        const itemLength = (item, index) => {
            if (item.type === 'talk') {
                // use best guess for variable height rows
                return 138 + (1.002936 * item.title.length + 6.77378)
            } else {
                return 145
            }
        }
        const length = itemLength(item, 0)
        const offset = sum(data.slice(0, index).map(itemLength))
        return { length, offset, index }
    }

    onEventPress = (item) => {
        const { navigation } = this.props;
        if (item.type === 'talk') {
            navigation.navigate('TalkDetail')
        } else {
            navigation.navigate('BreakDetail')
        }

    }

    renderItem: any = ({ item }) => {
        if (item.type === 'talk') {
            return (
                <Talk style={{flex:1}}
                    name={item.speaker}
                    title={item.title}
                    avatarURL={item.image}
                    start={item.time}
                    duration={item.duration}
                    onPress={() => this.onEventPress(item)} />
            )
        } else {
            return (
                <Break title={item.title} start={item.time} duration={item.duration}/>
            )
        }
    }

    render() {
        let { activeTrack } = this.state;
        debugger
        var d = filter((item) => { return item.trackNumber === activeTrack }, data.schedule);
        return (
            <View>
                <ScrollView style={styles.tabContainer}>
                    <View style={{ flex: 1 }}>
                        <GradientBackgroud>
                            <TrackSelector track={activeTrack} onPressIn={this.setActiveTrack} />
                            <FlatList
                                ref='scheduleList'
                                data={d}
                                extraData={this.props}
                                renderItem={this.renderItem}
                                keyExtractor={(item, idx) => item.id.toString()}
                                getItemLayout={this.getItemLayout}
                                showsVerticalScrollIndicator={false}
                            />
                        </GradientBackgroud>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

export default ScheduleScreen;