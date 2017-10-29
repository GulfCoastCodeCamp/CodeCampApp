import React from 'react'
import { View, Modal } from 'react-native'
import RoundedButton from './RoundedButton'
import PropTypes from 'prop-types'


interface IState{
    showModal:boolean
}

class PreviousCampButton extends React.Component<{}, IState>{
    static propTypes = {
        children: PropTypes.string,
    }
    constructor(props) {
        super(props)
        this.state = {
            showModal: false
        }
    }

    toggleModal = () => {
        this.setState({ showModal: !this.state.showModal })
    }

    render() {
        return (
            <View>
                <RoundedButton onPress={this.toggleModal}>
                {this.props.children}    
                </RoundedButton>
                <Modal
                    visible={this.state.showModal}
                    onRequestClose={this.toggleModal}>
                    {/* <PresentationScreen screenProps={{ toggle: this.toggleModal }} /> */}
                </Modal>
            </View>
        )
    }
}

export default PreviousCampButton