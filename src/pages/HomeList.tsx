import React, { useState } from "react";
import { FlatList, View, StyleSheet, Text, TextInput, Button, TouchableHighlight } from "react-native";
import { Image } from "expo-image";
import { Ionicons } from '@expo/vector-icons';
import Entity from "../entities/entities";


export default function HomePage() {
    const [SearchResult, setSearchResults] = useState('');
    const [User, setUsers] = useState([]);

    const handleSearch = () => {
        const requestOptions = {
            method: 'GET',


        };
        var ListUser: Entity[] = []

        fetch(`https://api.github.com/users/${SearchResult}`, requestOptions)
            .then(response => response.json())
            .then(result => {

                setUsers([{
                    id: result.id,
                    name: result.name,
                    avatar: result.avatar_url,
                    repos:result.repos_url,


                }])


            })


            .catch(error => console.log('error', error));
    };




    return (
        <View style={styles.container}>
            <View style={styles.Pesquisa}>

                <TextInput
                    style={styles.title}
                    onChangeText={setSearchResults}
                    value={SearchResult}
                    placeholder="pesquisar usuário"
                />

                <TouchableHighlight
                    style={styles.botao}
                    onPress={handleSearch}
                >
                    <Ionicons name="ios-search-sharp" size={20} color="#191970" />
                </TouchableHighlight>
            </View>

            <FlatList
                renderItem={({ item }) => (
                    <View style={styles.card}>
                        <Image style={styles.img} source={{ uri:item.avatar}} />
                        <View style={styles.positionText}>
                            <Text style={styles.textCard}>{item.name}</Text>
                        </View>
                    </View>
                )}
    
                data={User}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        backgroundColor: 'blue',
        paddingTop: 20,
    },
    card: {
        width: '90%',
        aspectRatio: 5,
        marginTop: 20,
        backgroundColor: '',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        margin: 10,
        shadowColor: '#000',
        elevation: 15,
        borderRadius: 10,
        marginHorizontal: 20
    },
    Pesquisa: {
        width: '80%',
        aspectRatio: 6,
        backgroundColor: '#CFD0D6',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        margin: 60,
        shadowColor: '#000',
        elevation: 15,
        borderRadius: 40,
        paddingHorizontal: 30,
        marginHorizontal: 40,
        marginTop: 50,
        alignItems: 'center'
    },
    img: {
        width: 50,
        height: 50,
        marginHorizontal: 20,
        marginRight: 40,
        marginTop: 15,
        borderRadius:25,
    },
    title: {
        fontSize: 20,
        fontWeight: '400',
    },
    textCard: {
        fontSize: 15,
        fontWeight: '600'
    },
    positionText: {
        marginTop: 25
    },
    botao: {
        marginHorizontal: 60,
        height: 40,
        width: 50,
        backgroundColor: 'white',
       borderRadius:45,
        alignItems: 'center',
        justifyContent:'center',
    }
});