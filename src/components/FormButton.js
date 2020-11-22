import React from 'react';
import { StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';

const FormButton = ({title,buttonPress}) => {
    return(
        <>
            <Button 
                title={title}
                buttonStyle={styles.button}
                titleStyle={styles.title}
                onPress={buttonPress}
            />
        </>
    );
};

const styles = StyleSheet.create({
    button: {
        width:180,
        backgroundColor:'black',
    },
    title: {
        fontSize:22
    }
});

export default FormButton;