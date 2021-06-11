import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/pages/HomeScreen';
import DetailsScreen from './src/pages/DetailsScreen';
import MedScreen from './src/pages/MedScreen';
import LabScreen from './src/pages/LabScreen';
import HospScreen from './src/pages/HospScreen';

const Stack = createStackNavigator();



function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Plamhag" component={HomeScreen} 
             options={{ 
               headerStyle:{
                 backgroundColor:'#1f8c3c',
                },
                headerTintColor: '#fff',
              }
              
            } 
        />
        <Stack.Screen name="Médicos" component={MedScreen} 
              options={{ 
                headerStyle:{
                  backgroundColor:'#248728',
                 },
                 headerTintColor: '#fff',
               }
               
             } 
        />
        <Stack.Screen name="Laboratórios" component={LabScreen} 
              options={{ 
                headerStyle:{
                  backgroundColor:'#248728',
                 },
                 headerTintColor: '#fff',
               }
               
             } 
        />
        <Stack.Screen name="Hospitais" component={HospScreen} 
              options={{ 
                headerStyle:{
                  backgroundColor:'#248728',
                 },
                 headerTintColor: '#fff',
               }
               
             } 
        />
        <Stack.Screen name="Detalhes" component={DetailsScreen} 
              options={{ 
                headerStyle:{
                  backgroundColor:'#248728',
                 },
                 headerTintColor: '#fff',
               }
               
             } 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
