import React from 'react'
import {View, Text, Image,ScrollView} from 'react-native'
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation'

import LocationScreen from './LocationScreen';
import AboutScreen from './AboutScreen'
import styles from '../Navigation/Styles/NavigationStyles'
import Icon from 'react-native-vector-icons/FontAwesome'
import {Images} from '../Themes'

class PrevScreen extends React.Component<{}, {}>{
    static navigationOptions = {
        tabBarLabel: 'Schedule',
        tabBarIcon: ({ focused }) => (
            <Icon name='calendar' size={30} color={focused ? 'blue' : 'lightblue'}/>
        )
    }

    render() {
        return (
            <View>
                <Image source={Images.mainbackground} style={styles.backgroundImage} resizeMode='stretch' />
                <ScrollView style={styles.container}>
                    <Text style={styles.sectionText}>Prev Screen</Text>
                </ScrollView>    
            </View>    
        )
    }
}


const navigator: any = StackNavigator({
    PrevScreen: { screen: PrevScreen }
}, {
        initialRouteName: 'PrevScreen',
        headerMode: 'none'
    }
);

const TabNav = TabNavigator({
    Schedule: { screen: navigator },
    Location: { screen: LocationScreen },
    About: { screen: AboutScreen }
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

