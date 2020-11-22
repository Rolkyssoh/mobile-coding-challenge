import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';

const ListScreen = () => {
    return(
        <View style={styles.container}>
            <Text>List Screen</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default ListScreen;