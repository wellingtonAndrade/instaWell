/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View, 
  Image,
  Dimensions,
  TouchableOpacity
} from 'react-native';
import InputComentario from './InputComentario';
import Likes from './Likes';


let widhtScreen = Dimensions.get('screen').width;


export default class Posts extends Component<{}> {

  comentarios(foto){
    {return foto.comentario.length > 0 ?
      <View style={styles.comentario}>
        <Text style={styles.fotoComentario}>{foto.loginUsuario}</Text>
        <Text>{foto.comentario}</Text> 
      </View> :
      null
    }   
  }

  render() {    
    const {foto, likeCallback, comentarioCallback} = this.props;
                 
    return (       
      <View> 
        <View style={styles.cabecalho}>  
          <Image source={{uri: foto.urlPerfil}}
            style={styles.fotoPerfil}/> 
          <Text>{foto.loginUsuario}</Text>
        </View>     
        <Image source={{uri: foto.urlFoto}}
          style={styles.fotoPublicacao}/>  
       
        <Likes foto={foto} likeCallback={likeCallback}/>

        {this.comentarios(foto)}


       {foto.comentarios.map((item)=>
          <View Key={item.id}  style={styles.comentario}>
            <Text style={styles.fotoComentario}>{item.login}</Text>
            <Text>{item.texto}</Text> 
          </View> 
        )} 

        <InputComentario foto={foto} comentarioCallback={comentarioCallback}/>       
      </View>          
    );
  }
}

const styles = StyleSheet.create({
  cabecalho:{
    margin: 10, 
    flexDirection: 'row', 
    alignItems: 'center'
  },
  fotoPerfil: {
    marginRight:10, 
    borderRadius: 20, 
    width: 40, 
    height: 40
  },
  fotoPublicacao: {
    width: widhtScreen, 
    height: widhtScreen
  },    
  comentario:{
    flexDirection: 'row'
  },
  fotoComentario:{
    fontWeight: 'bold',
    marginRight: 5
  }
});

