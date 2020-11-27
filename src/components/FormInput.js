import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Input } from 'react-native-elements'; 
import IconMail from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/FontAwesome5'

const FormInput = ({val, label,TextSecure, TextChange, holder, correct, capitalize, iconName}) => {
    return(
        <>
             <Input 
                label={val.length>0 && `${label}`}
                placeholder={holder}
                onChangeText={TextChange}
                value={val}
                secureTextEntry={TextSecure}
                labelStyle={styles.label}
                inputContainerStyle={styles.input}
                autoCorrect={correct}
                autoCapitalize={capitalize}
                 leftIcon={
                     <IconMail 
                         name={iconName}
                         color="gray"
                         size={20}
                     />
                 }
            />
        </>
    )
};

const styles = StyleSheet.create({
    input: {
        // backgroundColor:'red',
        // padding:5
    },
    label: {
        fontSize:15,
        color:'black'
        // backgroundColor:'yellow'
        // alignSelf:'center'
    },
});

export default FormInput;