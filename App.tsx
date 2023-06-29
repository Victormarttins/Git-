import HomeList from "./src/pages/HomeList";
 import { createNativeStackNavigator } from "@react-navigation/native-stack";
   import { NavigationContainer } from '@react-navigation/native';
import Perfil from "./src/pages/Perfil";
import DetailsPerfil from "./src/pages/Perfil";
import fullNamePage from "./src/pages/fullName";

export default function App() {  

  const Stack = createNativeStackNavigator();
  


   
     
   
          
       
       return(
           <NavigationContainer>
           <Stack.Navigator>
             
           <Stack.Screen name="HomeList" component={HomeList} 
             options={{
              title: 'Home',
              headerStyle: {
                backgroundColor: '#92b395',
                
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
                
              },
            }}
             />
             <Stack.Screen name="DetailsPerfil" component={DetailsPerfil}
             options={{
              title: 'Repositories',
              headerStyle: {
                backgroundColor: '#92b395',
                
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
                
              },
            }}
             />
             <Stack.Screen name="fullNamePage" component={fullNamePage} 
               options={{
                title: 'Repositorio',
                headerStyle: {
                  backgroundColor: '#92b395',
                  
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                  fontWeight: 'bold',
                  
                },
              }}
             
             />
             
            
           </Stack.Navigator>
         </NavigationContainer>


    
       );
   
  
}