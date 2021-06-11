import * as React from 'react';
import { View, Text, FlatList,StyleSheet,StatusBar, SafeAreaView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import CardBButtom from '../../component/CardButtom';
import SearchBarList from '../../component/SearchBar';



const data = [
    { id: '1', title: 'ELAINE DE BATTISTI RIBEIRO', espec:'Ginecologia', end:'rua AFONSO SENNA' },
    { id: '2', title: 'HUMBERTO BERNARDES',espec:'Urologia' },
    { id: '3', title: 'Medico 3' },
    { id: '4', title: 'Medico 4' },
    { id: '5', title: 'Medico 5' },
    { id: '6', title: 'Medico 6' },
    { id: '7', title: 'Medico 7' },
    { id: '8', title: 'Medico 8' },
    { id: '9', title: 'Medico 9' },
    { id: '10', title: 'Medico 10' },
  ];


function MedScreen({ navigation }) { 
    return (
      <SafeAreaView>
          <SearchBarList/>
            <FlatList
            data={data}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
            <View style={{ padding: 1,flex: 1, alignItems: 'flex-start', justifyContent: 'flex-start'}}>
               <CardBButtom>
                    <TouchableOpacity onPress={() => navigation.navigate('Detalhes')}>
                        <Text style={styles.listItemText}>{item.title}</Text>
                        <Text>Especialidade: {item.espec}</Text>
                    </TouchableOpacity>
                </CardBButtom> 
          </View>
        )}
      />
      </SafeAreaView>  
        
      
    );
  }
  export default MedScreen;

const styles = StyleSheet.create({
          text: {
          fontSize: 20,
          color: '#101010',
          marginTop: 60,
          fontWeight: '700'
        },
        listItem: {
          marginTop: 10,
          padding: 20,
          alignItems: 'center',
          backgroundColor: '#fff',
          width: '100%'
        },
        listItemText: {
          alignItems:'flex-start',
          fontSize: 22
        }
      });