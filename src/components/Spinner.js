import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';

const Spinner = ({loading}) => {
    return(
        <View style={styles.spinner}>
            { loading && <ActivityIndicator size='large' color='green' /> }
        </View>
    )
};

const styles = StyleSheet.create({
    spinner: {
        alignItems:'center',
        marginBottom:3
   },
});

export default Spinner;