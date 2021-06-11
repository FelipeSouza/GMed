import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import CardBButtom from '../../component/CardButtom';



function HomeScreen({ navigation }) {
    return (
      <View style={{ padding: 60,flex: 1, alignItems: 'center', justifyContent: 'flex-start'}}>
        
        <TouchableOpacity onPress={() => navigation.navigate('Credenciados')}>
           <CardBButtom>
                <Text>Medicos/Consultórios</Text>
           </CardBButtom>
        </TouchableOpacity>

        <TouchableOpacity>
           <CardBButtom>
                <Text>Laboratórios</Text>
           </CardBButtom>
        </TouchableOpacity>

        <TouchableOpacity>
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