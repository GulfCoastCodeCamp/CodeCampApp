import React from 'react'
import { View, Text, Image, ScrollView, Animated, LayoutAnimation, TouchableOpacity, Linking } from 'react-native'
import { Images, Metrics } from '../Themes'
import Icon from 'react-native-vector-icons/FontAwesome'
import styles from './Styles/LocationScreenStyles'
import VenueMap from '../Components/VenueMap'
interface IState {
    scrollY: Animated.Value,
    mapTouchStart: string,
    mapViewMode: boolean
}

class LocationScreen extends React.Component<{}, IState>{
    openMaps(daddr = 'Shelby+Hall,+150+Jaguar+Dr,+Mobile,+AL+36608') {
        const googleMaps = `comgooglemaps://?daddr=${daddr}`
        const appleMaps = `http://maps.apple.com?daddr=${daddr}`

        Linking.canOpenURL(googleMaps).then((supported) => {
            if (supported) {
                Linking.openURL(googleMaps)
            } else {
                Linking.canOpenURL(appleMaps).then((supported) =>
                    supported
                        ? Linking.openURL(appleMaps)
                        : window.alert('Unable to find maps application.')
                )
            }
        })
    }
    onCloseMap(): any {
        LayoutAnimation.configureNext({ ...LayoutAnimation.Presets.linear, duration: 400 })
        this.setState({ mapViewMode: false })
    }
    renderBackground(): any {
        const height = Metrics.locationBackgroundHeight
        const { scrollY } = this.state
        return (
            <Animated.Image
                style={[styles.venue, { position: 'absolute' }, {
                    width: '100%',
                    height: height,
                    transform: [{
                        translateY: scrollY.interpolate({
                            inputRange: [-height, 0, height],
                            outputRange: [height, 0, 0]
                        })
                    }, {
                        scale: scrollY.interpolate({
                            inputRange: [-height, 0, height],
                            outputRange: [0.9, 1, 1.5]
                        })
                    }]
                }]}
                source={Images.shelbyhall}
                resizeMode='cover'
            />
        )
    }
    reanderHeader(): any {
        const height = Metrics.locationBackgroundHeight - 24
        const { scrollY } = this.state
        return (
            <Animated.View style={{
                position: 'relative',
                height: height,
                padding: 0,
                opacity: scrollY.interpolate({
                    inputRange: [-height, 0, height * 0.4, height * 0.9],
                    outputRange: [1, 1, 1, 0]
                }),
                transform: [{
                    translateY: scrollY.interpolate({
                        inputRange: [-height, 0, height * 0.45, height],
                        outputRange: [0, 0, height * 0.45, height * 0.4]
                    })
                }]
            }}>
                <View style={styles.headingContainer}>
                    <Text style={styles.mainHeading}>Shelby Hall</Text>
                    <Text style={styles.address}>
                        150 Jaguar Dr, {'\n'}
                        Mobile, AL 36608
          </Text>
                </View>
            </Animated.View>
        )
    }
    static navigationOptions = {
        tabBarLabel: 'Location',
        tabBarIcon: ({ focused }) => (
            <Icon name='map-marker' size={30} color={focused ? 'blue' : 'lightblue'} />
        )
    }

    private scrollSpot: number;
    private activeMapHeight: number;

    constructor(props) {
        super(props)

        this.state = {
            scrollY: new Animated.Value(0),
            mapTouchStart: '',
            mapViewMode: false
        }

        this.scrollSpot = Metrics.screenHeight / 4.25
        this.activeMapHeight = Metrics.screenHeight - this.scrollSpot
    }

    render() {
        const { mapViewMode } = this.state
        const { event } = Animated
        return (
            <View>
                <ScrollView
                    ref='scrolly'
                    onScroll={event([{ nativeEvent: { contentOffset: { y: this.state.scrollY } } }])}
                    scrollEventThrottle={10}
                    scrollEnabled={!this.state.mapViewMode}>
                    <View>
                        <Image source={Images.mainbackground} style={styles.backgroundImage} resizeMode='stretch' />
                        {this.renderBackground()}
                        {this.reanderHeader()}
                    </View>
                    <View ref='mapContainer' >
                        <VenueMap mapViewMode={mapViewMode} onCloseMap={this.onCloseMap} scrollEnabled={mapViewMode} style={[styles.map, mapViewMode && { height: this.activeMapHeight }]} />
                    </View>
                    <View style={styles.mapActions}>
                        <TouchableOpacity onPress={() => this.openMaps()}>
                            <View style={styles.getDirections}>
                                <View style={styles.addressContainer}>
                                    <Text style={styles.venueName}>
                                        Shelby Hall 
                                    </Text>
                                    <Text style={styles.venueAddress}>
                                        150 Jaguar Dr{'\n'}
                                        Mobile, AL 36608
                                    </Text>
                                </View>
                                <View style={styles.directionsIcon}>
                                    <Icon name="car" size={30} color='black'/>
                                    <Text style={styles.directionsLabel}>Directions</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

export default LocationScreen;