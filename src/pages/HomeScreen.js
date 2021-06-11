import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import CardBButtom from '../../component/CardButtom';



function HomeScreen({ navigation }) {
    return (
      <View style={{ paddingTop: 60,paddingLeft: 1,flex: 1, alignItems: 'flex-start', justifyContent: 'flex-start'}}>
        
        <TouchableOpacity onPress={() => navigation.navigate('Médicos')}>
           <CardBButtom>
                <Text>Medicos/Consultórios</Text>
           </CardBButtom>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Laboratórios')}>
           <CardBButtom>
                <Text>Laboratórios</Text>
           </CardBButtom>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Hospitais')}>
           <CardBButtom>
                <Text>Hospitais/Clinicas</Text>
           </CardBButtom>
        </TouchableOpacity>
        
              
      </View>
    );
  }
  export default HomeScreen;

  //navigation.navigate('List')
 // onPress={() => navigation.navigate('List')