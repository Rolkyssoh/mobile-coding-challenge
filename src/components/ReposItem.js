import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Image } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Entypo'
import IconRepo from 'react-native-vector-icons/Feather';

const ReposItem = ({item}) => {
    // console.log('iiiiiddddddd: ', item.id.toString())
    return(
        <View style={styles.main_container}>
            <View style={styles.detailsViews}>
                <IconRepo
                    name='book'
                    size={25}
                />
                <Text style={styles.reposName} h4>{item.name}</Text>
            </View>
            <Text>{item.description}</Text>
            <View style={styles.detailsViews}>
                <Icon
                    name='star-outlined'
                    size={20}
                />
                <Text style={styles.RepoStar}>{item.stargazers_count}</Text>
            </View>
            <View style={{ flexDirection:'row', alignItems:'center', justifyContent:'space-around'}}>
                <Text style={{ fontSize:20}}>Owner : </Text>
                <Text style={styles.ownerName}>{item.owner.login}</Text>
                <Image 
                    source={{uri: `${item.owner.avatar_url}`}}
                    style={styles.avatarImg}
                />
                
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    main_container: {
        flex:1,
        paddingHorizontal:10, 
        paddingVertical:5, 
        backgroundColor:'gray', 
        margin:5,
        // marginHorizontal:10,
        // borderTopRightRadius:10,
        // borderBottomLeftRadius:10
        borderRadius:10,
        // overflow:'hidden'
    },
    detailsViews: {
        flexDirection:'row',
        alignItems:'center',
    },
    reposName: {
        color:'#0466d6',
        paddingHorizontal:5,
    },
    RepoStar: {
        paddingHorizontal:5
    },
    avatarImg: {
        height:50, 
        width:50, 
        borderRadius:30,
    },
    ownerName: {
        paddingHorizontal:5,
    }
});

export default ReposItem;