import React from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';

const FormButton = ({title,buttonPress, type, children}) => {
    return(
        <TouchableOpacity onPress={buttonPress} style={styles.button}>
            {/* <Button 
                title={title}
                type={type}
                buttonStyle={styles.button}
                titleStyle={styles.title}
                onPress={buttonPress}
            /> */}
            <Text style={styles.children} h4>
                {children}
            </Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        width:180,
        height:50,
        backgroundColor:'black',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:10
    },
    children: {
        fontSize:22,
        color:'white'
    }
});

export default FormButton;