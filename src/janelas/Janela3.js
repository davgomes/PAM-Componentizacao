import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, 
    ScrollView, TouchableOpacity} from 'react-native'
import styles from '../../Estilo';
import Entrada from '../componentes/Entrada';

const Janela3 = ({navigation}) => {
    return (
      <View style={styles.container}>
        <Text>Terceira Janela</Text>
        <TouchableOpacity 
          onPress={()=>{navigation.navigate('Janela4')}}
          style={styles.botao}
          >
          <Text>Troca Janela</Text>
        </TouchableOpacity>
      </View>
    )
  }
export default Janela3;