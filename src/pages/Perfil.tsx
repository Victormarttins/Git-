import React, { useEffect, useState } from "react";
import { FlatList, View, StyleSheet, Text, TextInput, Button, TouchableHighlight } from "react-native";
import { Image } from "expo-image";
import { Ionicons } from '@expo/vector-icons';
import Entity from "../entities/entities";
import Repositorios from "../entities/repositorios";

export default function DetailsPerfil({ route, navigation }) {

    const [searchRepos, setSearchRepos] = useState('');
    const [team, setTeam] = useState<Repositorios[]>([]);
    const [filteredTeam, setFilteredTeam] = useState<Repositorios[]>([]);

    const { id, name, avatar, repos } = route.params;

    const handleSearch = () => {
        const lowercaseSearchRepos = searchRepos.toLowerCase();
        const filteredRepos = team.filter(item => item.name.toLowerCase().includes(lowercaseSearchRepos));
        setFilteredTeam(filteredRepos);
    };

    const handleClear = () => {
        setSearchRepos('');
        setFilteredTeam(team);
    };

    useEffect(() => {
        const requestOptions = {
            method: 'GET',
            headers: myHeaders
        };

        var myHeaders = new Headers();
        myHeaders.append("Authorization", "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");
        var teamList: Repositorios[] = [];

        fetch(repos, requestOptions)
            .then(response => response.json())
            .then(result => {
                result.map((item) => {
                    teamList.push({
                        id: item.id,
                        name: item.name,
                        private: item.private,
                        fullName: item.full_name,
                        watchers: item.watchers,
                        gitUrl: item.git_url,
                        forks: item.forks,
                        language: item.language,
                        defaultBranch: item.default_branch,
                        createdAt: item.created_at,
                        description:item.description
                    });
                });
                setTeam(teamList);
                setFilteredTeam(teamList);
            })
            .catch(error => console.log('error', error));
    }, []);

    return (
     
                    <View style={styles.container}>
                    <View style={styles.card}> 
                    
                        <Image style={styles.img} source={avatar} />
                        <View style={styles.positionText}>
                            <Text style={styles.textCard}>{name}</Text>
                        </View>
               
        </View>
        <View style={styles.Pesquisa}>
            <TextInput
                style={styles.title}
                onChangeText={setSearchRepos}
                value={searchRepos}
                placeholder="pesquisar usuário"
            />
            <TouchableHighlight

                style={styles.botao}
                onPress={handleSearch}
            >
                <Ionicons name="ios-search-sharp" size={20} color="#191970" />
            </TouchableHighlight>
            <TouchableHighlight

                style={styles.clearButton}
                onPress={handleClear}
            >
                <Ionicons name="ios-close" size={20} color="#191970" />

            </TouchableHighlight>
        </View>

        <FlatList
            ListEmptyComponent={() => (
                <Text style={styles.noResultsText}>Nenhum resultado encontrado</Text>
            )}
            renderItem={({ item }) => (
                <TouchableHighlight
                       onPress={() => navigation.navigate('fullNamePage', item)}>
                <View style={styles.card}>
                    <View style={styles.positionText}>
                        <Text style={styles.textCard}>{item.name}</Text>
                    </View>
                </View>
                </TouchableHighlight>


            )}
            data={filteredTeam}
            keyExtractor={(item) => item.id.toString()}
        />



    </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        backgroundColor: 'withe',
        paddingTop: 20,
    },
    card: {
        width: '90%',
        aspectRatio: 5.5,
        marginTop: 20,
        backgroundColor: '#cddfcd',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        margin: 5,
        shadowColor: '#000',
        elevation: 15,
        borderRadius: 20,
        marginHorizontal: 20,
    },
    Pesquisa: {
        width: '90%',
        aspectRatio: 7,
        backgroundColor: '#c3dfd7',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        margin: 30,
        shadowColor: '#000',
        elevation: 15,
        borderRadius: 40,
        paddingHorizontal: 65,
        marginHorizontal: 20,
        marginTop: 50,
        alignItems: 'center'
    },
    img: {
        width: 50,
        height: 50,
        marginHorizontal: 20,
        marginRight: 40,
        marginTop: 7,
        borderRadius: 25,  
    },
    title: {
        flex: 1,
        fontSize: 17,
        fontWeight: '400',
        
    },
    textCard: {
        fontSize: 20,
        fontWeight: '600',
        marginHorizontal:20,
        marginTop: -5
    },
    positionText: {
        marginTop: 25
    },
    botao: {
        height: 30,
        width: 30,
        borderRadius: 45,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight:7
       
    },
    clearButton: {
        height: 30,
        width: 30,
        borderRadius: 45,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight:-50
    },
    noResultsText: {
        textAlign: 'center',
        marginTop: 20,
        fontSize: 16,
        fontWeight: '600',
    },
});