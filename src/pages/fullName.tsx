import React, { useEffect, useState } from "react";
import { FlatList, View, StyleSheet, Text, TextInput, Button, TouchableHighlight } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from '@react-navigation/native';

import Repositorios from "../entities/repositorios";

export default function FullNamePage({ route, navigation }) {
  const [filteredTeam, setFilteredTeam] = useState<Repositorios[]>([]);
  const repos: Repositorios = route.params;

  const resultado =true;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{repos.fullName} </Text>
      <View style={styles.positionText}>
      <Text style={styles.texto}>Data de criação: {repos.createdAt}</Text>
      <Text style={styles.texto}>http:{repos.gitUrl}</Text>
      <Text style={styles.texto}>Visualizadores : {repos.watchers}</Text>
      <Text style={styles.texto}>Forks : {repos.forks}</Text>
      <Text style={styles.texto}>Linguagem : {repos.language}</Text>
      <Text style={styles.texto}> Branch : {repos.defaultBranch}</Text>
      <Text style={styles.texto}> Description : {repos.description}</Text>
      <Text style={styles.texto}>
                    Resultado: {resultado ? "Public" : "Private"}
                </Text>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-start",
        backgroundColor: "white",
        paddingTop: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: "600",
        marginTop: 20,
        margin: 60,
        
    },
    texto: {
        fontSize: 18,
        fontWeight: "600",
        marginHorizontal: 10,
        padding: 10,
    },
    positionText: {
        marginTop: 25,
    },
});
