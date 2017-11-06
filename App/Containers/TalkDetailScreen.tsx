import React from 'react'
import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import GradientBackground from '../Components/GradientBackgroud'
import Icon from 'react-native-vector-icons/FontAwesome'
import { NavigationActions } from 'react-navigation'
import { Metrics,Colors } from '../Themes'
import {format} from 'date-fns'

const backAction = NavigationActions.back({
    key: 'Home'
})

interface IProp {
    navigation
}

class TalkDetailScreen extends React.Component<IProp, {}> {

    render() {
        const { talk } = this.props.navigation.state.params
        const { goBack } = this.props.navigation;
        const height = Metrics.screenHeight - 60;
        const bio = talk.speakerInfo && talk.speakerInfo[0] ? talk.speakerInfo[0].bio : '';
        return (
            <View >
                <GradientBackground>
                    <ScrollView style={{ height: Metrics.screenHeight }}>
                        <View style={{
                            flex: 1,
                            margin: 10
                        }}>
                            <TouchableOpacity onPress={() => goBack()} style={{
                                flex:1
                            }}>
                                <View style={{
                                    flex: 1,
                                    flexDirection: 'row',
                                    backgroundColor: 'transparent',
                                    marginTop:30
                                }}>
                                    <Icon name='long-arrow-left' size={30} color='white' />
                                    <Text style={{
                                        marginTop: 5,
                                        paddingLeft: 20,
                                        color: 'white'
                                    }}>Back</Text>
                                </View>
                            </TouchableOpacity>
                            <View style={{
                                flex: 1,
                                alignItems: 'center',
                                backgroundColor: "transparent"
                            }}>
                                <Icon name='user-circle-o' size={120} color='lightblue' style={{
                              
                                }} />
                                <Text style={{
                                    fontSize: 30,
                                    fontWeight: "800",
                                    color:'white'
                                }}>{talk.speaker}</Text>
                                </View>
                            <View style={{
                                flex: 1,
                                alignItems: 'center',
                                marginLeft: 20,
                                marginRight:20,
                                marginTop:10,
                                backgroundColor: 'white',
                                borderRadius: 5,
                                shadowOffset: {
                                    width: 1,
                                    height: 1
                                },
                                shadowRadius: 5,
                                shadowColor: Colors.redShadow,
                                shadowOpacity: 1
                            }}>

                                <View style={{flex:1}}>
                                    <Text style={{
                                        fontWeight: "100",
                                        margin:10
                                        
                                    }}>Talk</Text>
                                    <Text style={{
                                        margin:10,
                                        fontSize: 15,
                                        fontWeight: '400',
                                        textAlign:'auto'
                                    }}>{talk.description}</Text>
                                </View>
                                <View style={{ flex: 1 }}>
                                    <Text style={{
                                        fontWeight: "100",
                                        margin: 10

                                    }}>Bio</Text>
                                    <Text style={{
                                        margin:10,
                                        fontSize: 15,
                                        fontWeight: '400',
                                        textAlign: 'auto'
                                    }}>{bio}</Text>
                                </View>
                                <View style={{
                                    flex: 1,
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    paddingLeft: Metrics.doubleBaseMargin,
                                    paddingRight: Metrics.doubleBaseMargin,
                                    backgroundColor: '#E9E9EF',
                                    borderBottomLeftRadius: 5,
                                    borderBottomRightRadius:5

                                }}>
                                    <View style={{
                                        flex: 1,
                                        flexDirection: 'column'
                                    }}>
                                        <Text>Start</Text>
                                        <Text style={{ fontWeight: '800' }}>{format(talk.time ,'h:mmA')}</Text>
                                    </View>
                                    <View style={{
                                        flex: 1, flexDirection: 'column'
                                    }}>
                                        <Text>Duration</Text>
                                        <Text style={{ fontWeight: '800' }}>{`${talk.duration} Minutes`}</Text>
                                    </View>
                                  

                                </View>
                            </View>
                        </View>
                    </ScrollView>
                </GradientBackground>
            </View>
        );
    }
}

export default TalkDetailScreen;