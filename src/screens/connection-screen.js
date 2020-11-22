import React from 'react';
import {Text } from 'react-native-elements';
import { View, StyleSheet } from 'react-native';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';

class ConnectionScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            email:'',
            password:'',
        }
    }

    doConnect = () => {
        console.log('Do connectionnn!')
    }
   render() {
    return (
        <View style={styles.container}>
            <Text h1>Connect</Text>
            <View style={styles.inputView}>
                <FormInput 
                    label="Your email"
                    holder="Your email"
                    val={this.state.email}
                    TextChange={(text) => this.setState({email:text})}
                />
                <FormInput 
                    label="Your password"
                    holder="Your password"
                    val={this.state.password}
                    TextChange={(pwd) =>  this.setState({password: pwd})}
                    TextSecure
                />
            </View>
            <FormButton 
                title="Validate"
                buttonPress={this.doConnect}
            />
        </View> 
    );
   }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems:'center',
        // backgroundColor: 'green'
    },
    inputView: {
        width: '80%'
    },

});

export default ConnectionScreen;