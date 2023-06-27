import React, { useEffect, useState } from "react";
import { FlatList, View, StyleSheet, TouchableHighlight } from "react-native";
import { Image } from "expo-image";
import { SearchBar } from "react-native-elements";
import Entity from "../entities/entities";



export default function HomeList() {
  const [users, setUsers] = useState<Entity[]>([]);
  const [searchQuery, setSearchQuery] = useState([]);

      const handleSearch = () => {
    const requestOptions = {
        method: "GET",
      };
     
  
  
   

    var userList: Entity[] = [];

    fetch(`https://api.github.com/users/${users}`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        
         setUsers(({
            id: result.id
            avatar_url: result.avatar_url,
            url:result.url,
            repos_url:result.repos_url,
          }));
        
        setUsers(userList);
        setUsers(result)
        setSearchQuery(users)
      })
      .catch((error) => console.log("error", error));
  }



  

  return (
    <View style={styles.container}>
      
      <SearchBar
        containerStyle={styles.searchBarContainer}
        inputContainerStyle={styles.searchBarInputContainer}
        placeholder="Pesquisar"
        onChangeText={handleSearch}
       

      />
      <TouchableHighlight style={{widht:100,height:200}}>
        
       
      </TouchableHighlight>
      <FlatList
        data={users}
        renderItem={({ item }) => (
            <View>
              <Image source={{ uri: item.avatar_url }} />
            </View>
           
         
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  searchBarContainer: {
    width: "90%",
    marginTop: 50,
    backgroundColor: "transparent",
    borderTopWidth: 0,
    borderBottomWidth: 0,
  },
  searchBarInputContainer: {
    height: 40,
    backgroundColor: "#e6e6e6",
  },
 
})