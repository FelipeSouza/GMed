import * as React from 'react';
import { Button, View, Text } from 'react-native';
import CardBButtom from '../../component/CardButtom';



function DetailsScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'flex-start', }}>
          <CardBButtom >
              <Text style={{fontSize:20}}>Nome: </Text>
              <Text>Especialidade: Medico 1</Text>
              <Text>Endereço: Rua 1</Text>
              <Text>Telefone:(11)111111</Text>
          </CardBButtom>
        <Button title="Início" onPress={() => navigation.navigate('Plamhag')} />
      </View>
    );
  }

  export default DetailsScreen;