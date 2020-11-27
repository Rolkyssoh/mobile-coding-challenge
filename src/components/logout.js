import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import auth from '@react-native-firebase/auth';

const Logout = (props) => {
    useEffect(() => {
        console.log('props de navigatre : ', props.navigation)
        auth()
            .signOut()
            .then(() => {
                console.log('User signed out!!!');
                props.navigation.navigate("connection")
            });
    })
    return(
        <View style={styles.container}>
            <Text h2>Disconnected</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems:'center'
    }
})

export default Logout;