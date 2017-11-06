import React from 'react'
import { View, Text, Image, ScrollView } from 'react-native'
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation'

import LocationScreen from './LocationScreen';
import AboutScreen from './AboutScreen'
import styles from '../Navigation/Styles/NavigationStyles'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Images } from '../Themes'
import ScheduleScreen from './ScheduleScreen';
import BreakDetailScreen from './BreakDetailScreen'
import TalkDetailScreen from './TalkDetailScreen'

// class PrevScreen extends React.Component<{}, {}>{
//     static navigationOptions = {
//         tabBarLabel: 'Schedule',
//         tabBarIcon: ({ focused }) => (
//             <Icon name='calendar' size={30} color={focused ? 'blue' : 'lightblue'}/>
//         )
//     }

//     render() {
//         return (
//             <View>
//                 <Image source={Images.mainbackground} style={styles.backgroundImage} resizeMode='stretch' />
//                 <ScrollView style={styles.container}>
//                     <Text style={styles.sectionText}>Prev Screen</Text>
//                 </ScrollView>    
//             </View>    
//         )
//     }
// }


const navigator: any = StackNavigator({
    Home: { screen: ScheduleScreen },
    TalkDetail: { screen: TalkDetailScreen },
    BreakDetail: { screen: BreakDetailScreen }
}, {
        headerMode: 'none',
        initialRouteName: 'Home',
        cardStyle: styles.card
    })

const TabNav = TabNavigator({
    Schedule: {
        screen: navigator, navigationOptions : {
            tabBarLabel: 'Schedule',
            tabBarIcon: ({ focused }) => (
                <Icon name='calendar' size={30} color={focused ? 'lightblue' : 'white'} />
            )
        }
    },
    Location: {
        screen: LocationScreen, navigationOptions : {
            tabBarLabel: 'Location',
            tabBarIcon: ({ focused }) => (
                <Icon name='map-marker' size={30} color={focused ? 'lightblue' : 'white'} />
            )
        } },
    About: {
        screen: AboutScreen,
        navigationOptions :{
            tabBarLabel: 'General Info',
            tabBarIcon: ({ focused }) => (
                <Icon name='info-circle' size={30} color={focused ? 'lightblue' : 'white'} />
            )
        }}
}, {
        key: 'Schedule',
        tabBarComponent: TabBarBottom,
        tabBarPosition: 'bottom',
        animationEnabled: true,
        swipeEnabled: true,
        headerMode: 'none',
        initialRouteName: 'Schedule',
        tabBarOptions: {
            style: styles.tabBar,
            labelStyle: styles.tabBarLabel,
            activeTintColor: 'red',
            inactiveTintColor: 'red'
        }
    })

export default TabNav

