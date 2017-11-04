import React from 'react'
import { View, Text, TouchableOpacity} from 'react-native'
import GradientBackground from '../Components/GradientBackgroud'
import Icon from 'react-native-vector-icons/FontAwesome'

interface IProp{
    navigation
}

class TalkDetailScreen extends React.Component<IProp, {}> {
    goBack: () => {
       
    }

    render() {
        return (
            <GradientBackground>
                <TouchableOpacity onPress={this.goBack}>
                    <Icon name='long-arrow-left' size={30} color='white'/>
                    <Text>Back</Text>
                </TouchableOpacity>
                <Text>TalkDetailScreen</Text>
            </GradientBackground>
        );
    }
}

export default TalkDetailScreen;