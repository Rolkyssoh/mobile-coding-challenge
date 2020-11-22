import React from 'react';
import { Text } from 'react-native-elements';
import { View, StyleSheet } from 'react-native';


const ConnectionScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Connection Screen</Text>
        </View> 
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems:'center'
    }
});

export default ConnectionScreen;