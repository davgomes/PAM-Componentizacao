import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, 
    ScrollView, TouchableOpacity} from 'react-native'
import styles from '../../Estilo';
import Entrada from '../componentes/Entrada';

const Janela4 = ({navigation}) => {
    return (
      <View style={styles.container}>
        <Text>Quarta Janela</Text>
        <TouchableOpacity 
          onPress={()=>{navigation.navigate('Formulario')}}
          style={styles.botao}
          >
          <Text>ACESSAR FORMULÁRIO</Text>
        </TouchableOpacity>
      </View>
    )
  }

export default Janela4;