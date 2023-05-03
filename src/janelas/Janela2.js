import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, 
    ScrollView, TouchableOpacity} from 'react-native'
import styles from '../../Estilo';
import Entrada from '../componentes/Entrada';

const Janela2 = ({navigation}) => {
    return (
        <View style={styles.container}>
          <Text>Segunda Janela</Text>
          <TouchableOpacity 
            onPress={()=>{navigation.navigate('Janela3')}}
            style={styles.botao}
            >
            <Text>Troca Janela</Text>
          </TouchableOpacity>
        </View>
      )
}
export default Janela2;