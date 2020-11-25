import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-elements';

const MyHeader = ({title}) => {
    return(
        <View style={styles.title}>
            <Text h3>{title}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    title: {
        alignItems:'center',
        backgroundColor:'#DDDDDD',
    },
});

export default MyHeader;