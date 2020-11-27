import Axios from 'axios';
import React from 'react';
import { View, StyleSheet, FlatList} from 'react-native';
import MyHeader from '../components/My-header';
import ReposItem from '../components/ReposItem';
import Spinner from '../components/Spinner';
import auth from '@react-native-firebase/auth';

class ListScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            repos:[],
            isLoading: false,
            totalCount:''
        }
    }

    componentDidMount() {
        this.getRepos();
        if(!auth().currentUser) {
            this.props.navigation.navigate("connection")
        }
    }

    componentWillUnmount() {
        // fix Warning: Can't perform a React state update on an unmounted component
        this.setState = (state, callback) => {
            return;
        };
    }

    getRepos = async () => {
        this.setState({isLoading: true})
        const pageNumber = Math.floor(this.state.repos.length /30) + 1;
        const url = 'https://api.github.com/search/repositories?q=created:>2020-10-22&sort=stars&order=desc&page='+ pageNumber;
        await Axios.get(url)
            .then((response) => {
                console.log('logueur tableau : ', response.data.items.length)
                console.log('Retourrrr de getRepos: ', response.data.items);
                this.setState({
                    repos: [...this.state.repos, ...response.data.items],
                    totalCount: response.data.total_count,
                    isLoading: false
                });
                console.log('repoooooooossss : ', this.state.repos);
            })
            .catch((error) => {
                console.log('affichage de error : ', error);
                this.setState({isLoading: false})
            })
    }

    render() {
        const { repos, totalCount, isLoading } = this.state;

        return(
            <View style={styles.container}>
                <MyHeader title="Repos List" />
                <View style={styles.itemStyles}>
                    <View>
                        <FlatList
                            data={repos}
                            keyExtractor={(item) => item.id.toString()}
                            onEndReachedThreshold={0.5}
                            onEndReached={() => {
                                console.log("Fin de page atteinte!");
                                if(repos.length < totalCount) {
                                  this.getRepos()
                                }
                            }}
                            renderItem={({item}) => <ReposItem item={item}/>}
                        />
                    </View>
                    <Spinner loading={isLoading} />
                </View>
            
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        backgroundColor:'#f1f1f1',
        flex:1,
        justifyContent:'center',
    },
    itemStyles: {
        flex:1,
        justifyContent:'center'
    },
 
});

export default ListScreen;