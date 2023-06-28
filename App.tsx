import HomeList from "./src/pages/HomeList";
 import { createNativeStackNavigator } from "@react-navigation/native-stack";
   import { NavigationContainer } from '@react-navigation/native';
import Perfil from "./src/pages/Perfil";
import DetailsPerfil from "./src/pages/Perfil";

export default function App() {  

  const Stack = createNativeStackNavigator();
  


   
     
   
          
       
       return(
           <NavigationContainer>
           <Stack.Navigator>
             
             <Stack.Screen name="HomeList" component={HomeList} />
             <Stack.Screen name="DetailsPerfil" component={DetailsPerfil} />
            
           </Stack.Navigator>
         </NavigationContainer>
    
       );
   
  
}