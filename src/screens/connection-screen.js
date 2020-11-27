import React from 'react';
import {Text } from 'react-native-elements';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';

import auth from '@react-native-firebase/auth';

class ConnectionScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            email:'',
            password:'',
            isLoading:false,
            error:''
        }
    }

    componentDidMount(){
        if(auth().currentUser) {
            this.props.navigation.navigate("Search")
        }
    }

    componentWillUnmount() {
        // fix Warning: Can't perform a React state update on an unmounted component
        this.setState = (state, callback) => {
            return;
        };
    }

    doConnect = () => {
       if(this.state.email!='' && this.state.password!='') {
        console.log('Do connectionnn!',  this.state.email, this.state.password)
        this.setState({ isLoading: true })
         auth()
             .signInWithEmailAndPassword(this.state.email, this.state.password)
             .then(() => {
                 console.log('Successs user sign in!');
                 this.props.navigation.navigate("Search")
                 this.setState({ isLoading: false})
             })
             .catch(() => {
                 console.log('User not exist!!!');
                 auth()
                     .createUserWithEmailAndPassword(this.state.email, this.state.password)
                     .then(() => {
                         console.log('User account created and signed in!!!')
                         this.props.navigation.navigate("Search")
                         this.setState({ isLoading: false})
                     })
                     .catch(error => {
                         console.log('Erreur pendant la création: ', error.message )
                         this.setState({ error: 'email or password error'})
                         this.setState({ isLoading: false})
                     })
             })
       }
    }

    emailChanged = (text) => {
        this.setState({email:text})
        if(text==''){
            this.setState({error:''})
        }
    }

    passwordChanged = (pwd) => {
        this.setState({password: pwd});
        if(pwd==''){
            this.setState({error:''})
        }
    }

   render() {
       const { email, password, isLoading, error } = this.state

    return (
        <View style={styles.container}>
            <Text h1>Connect</Text>
            {error!='' && <Text style={{fontSize:15, color:'red'}} h4>email or password error</Text>}
            <View style={styles.inputView}>
                <FormInput 
                    label="Your email"
                    holder="Your email"
                    val={email}
                    TextChange={this.emailChanged}
                    capitalize="none"
                    iconName="email-multiple"
                />
                <FormInput 
                    label="Your password"
                    holder="Your password"
                    val={password}
                    TextChange={this.passwordChanged}
                    TextSecure
                    correct
                    capitalize='none'
                    iconName="lock"
                />
            </View>
            {/* <FormButton 
                title={isLoading ? <ActivityIndicator size="small" color='green'/> : "Validate"}
                buttonPress={this.doConnect}
            /> */}
            <FormButton buttonPress={this.doConnect}>
                { isLoading ? <ActivityIndicator size="large" color='white'/>  : "Validate"}
            </FormButton>
        </View> 
    );
   }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems:'center',
        // backgroundColor: 'green'
    },
    inputView: {
        width: '80%'
    },

});

export default ConnectionScreen;