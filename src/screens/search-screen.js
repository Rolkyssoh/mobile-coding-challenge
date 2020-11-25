import Axios from 'axios';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button,Input } from 'react-native-elements';
import { FlatList } from 'react-native-gesture-handler';
import MyHeader from '../components/My-header';
import ReposItem from '../components/ReposItem';
import Spinner from '../components/Spinner';

class SearchScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            searchTerm:'',
            repos:[],
            isLoading: false,
            totalCount:''
        }
        this.page = 0
        this.noResult = false
    }

    componentDidMount() {
        // this.getRepos(this.page+1);
    }

    componentWillUnmount() {
        // fix Warning: Can't perform a React state update on an unmounted component
        this.setState = (state, callback) => {
            return;
        };
    }

    getReposByName = async (name) => {
        this.setState({isLoading: true})
        const pageNumber = Math.floor(this.state.repos.length /30) + 1;
        console.log('Pade numéro : ', pageNumber);
        const url = 'https://api.github.com/search/repositories?q=' + name + '&created:>2020-10-22&sort=stars&order=desc&page='+ pageNumber;
        await Axios.get(url)
            .then((response) => {
                console.log('logueur tableau : ', response.data.items.length)
                console.log('Retourrrr de getReposByName: ', response.data.items);
                if(response.data.items.length == 0) {
                    this.noResult = true;
                    this.setState({ repos: []})
                } 
                this.setState({ 
                    repos: [...this.state.repos, ...response.data.items],
                    totalCount: response.data.total_count,
                    isLoading: false
                });
            })
            .catch((error) => {
                console.log('affichage de error : ', error);
                this.setState({isLoading: false})
            })
    }

    ChangeTextSearch = (term) => {
        console.log('Do Search!!!!'); 
        this.setState({ 
            searchTerm: term,
            repos:[]
        });
        this.state.repos.filter(repo =>
            repo.name.toLowerCase().includes(term.toLowerCase()))
        console.log('termmmm ', term)
    }

     doSearch= () =>{
        console.log('lance la recherche');
        if(this.state.searchTerm !='') {
            this.setState({ 
                repos:[],
            }, ()=> {
               this.getReposByName(this.state.searchTerm)
            })
        }
         
     }

     handleChange = (e) => {
         this.setState({ searchTerm: e.target.value }, ()=>{
             console.log('testtttttttt: ', this.state.searchTerm)
         });
     }

     searchResult (){
         if(this.state.searchTerm !='') {
            <Text style={{alignSelf:'center'}} h4>Aucun élément trouvé!</Text>
         }
     }

    render() {
        const { repos, searchTerm, isLoading,totalCount } = this.state;
        // const filteredRepos = repos.filter(repo =>
        //     repo.name.toLowerCase().includes(searchTerm.toLowerCase()))

        return(
            <View style={styles.container}>
                <MyHeader title="Search" />
                <Input 
                    placeholder="Search term"
                    value={this.state.searchTerm}
                    onChangeText={this.ChangeTextSearch}
                    onChange={this.handleChange}
                />
                <Button
                    title="Do search"
                    type="clear"
                    onPress={this.doSearch}
                />
                <View style={styles.searcResult}>      
                   <View>
                        <FlatList 
                            // data={filteredRepos}
                            data={repos}
                            keyExtractor={(item) => item.id.toString()}
                            onEndReachedThreshold={0.5}
                            onEndReached={() => {
                                console.log("Fin de page atteinte!");
                                if(repos.length < totalCount) {
                                    this.getReposByName(searchTerm)
                                }
                            }}
                            renderItem={({item}) => <ReposItem item={item}/>}
                         />
                   </View>
                   <Spinner loading={isLoading} />
                   <View style={styles.notFound}>
                        { this.noResult && searchTerm.length !=0 &&  <Text h4>No item found for previous search</Text>}
                   </View>
                </View>                
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        flex:1,
    },
    pageTitle: {
        alignItems:'center',
        backgroundColor:'#DDDDDD',
    },
    searcResult: {
        backgroundColor:'#f1f1f1',
        flex:1,
        justifyContent:'center',
    },
    notFound: {
        justifyContent:'center', 
        alignItems:'center'
    }
});

export default SearchScreen;