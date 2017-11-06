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

import data from '../../Features/schedules'
interface IState {

    activeTrack: number
}

interface IProp {
    navigation: any
}


class ScheduleScreen extends React.Component<IProp, IState> {

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
            navigation.navigate('TalkDetail', {"talk":item})
        }

    }

    renderItem: any = ({ item }) => {
        if (item.type === 'talk') {
            return (
                <Talk style={{ flex: 1 }}
                    name={item.speaker}
                    title={item.title}
                    avatarURL={item.image}
                    start={item.time}
                    duration={item.duration}
                    speakerInfo={item.speakerInfo}
                    onPress={() => this.onEventPress(item)} />
            )
        } else {
            return (
                <Break title={item.title} start={item.time} duration={item.duration} type={item.type} />
            )
        }
    }

    render() {
        let { activeTrack } = this.state;
        debugger
        var d = filter((item) => { return item.trackNumber === activeTrack }, data.schedule);
        return (
            <View>
                <GradientBackgroud>

                    <ScrollView style={styles.tabContainer}>
                        <View style={{ flex: 1 }}>
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
                        </View>
                    </ScrollView>
                </GradientBackgroud>

            </View>
        );
    }
}

export default ScheduleScreen;