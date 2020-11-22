import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import FormInput from '../components/FormInput';

class SearchScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            search:''
        }
    }

    doSearch = () => {
        console.log('Do Search!!!!');
    }

    render() {
        return(
            <View style={styles.container}>
                <View style={styles.pageTitle}>
                    <Text h3>Search</Text>
                </View>
                <FormInput 
                    holder="Search"
                    val={this.state.search}
                    TextChange={this.doSearch}
                />
                <View style={styles.searcResult}>
                    <Text>Résultat de recherche</Text>
                </View>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'flex-start',
        // alignItems:'center',
    },
    pageTitle: {
        alignItems:'center',
        backgroundColor:'#DDDDDD',
    },
    searcResult: {
        backgroundColor:'red'
    }
});

export default SearchScreen;