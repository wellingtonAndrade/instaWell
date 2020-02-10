/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  FlatList
} from 'react-native';
import Posts from './Posts';


export default class Feed extends Component<{}> {

  constructor(){
    super();
    this.state = {
      fotos:[],
      likes: 0
    }
  }

  componentDidMount(){
    fetch('https://instalura-api.herokuapp.com/api/public/fotos/rafael')
      .then(resposta => resposta.json())
        .then(json => this.setState({fotos: json}));
  }

  like(idFoto) {  
    const foto = this.state.fotos.find(foto => foto.id === idFoto)

    let novaLista = foto.likers;
    if(!foto.likeada) {
      novaLista = foto.likers.concat({login: 'Wellington'});
    }else{
      novaLista = foto.likers.filter((resp) => {
        return resp.login !== 'Wellington' 
      })
    }

    const fotoAtualizada = {
        ...foto,
        likeada: !foto.likeada,
        likers: novaLista
    }
    
    const fotos = this.state.fotos.map(fotos => foto.id === fotos.id ? fotoAtualizada : fotos);
    this.setState({fotos: fotos});
  } 

  adicionaComentario(valorComentario, inputComentario, idFoto){
    console.log(valorComentario);
    const foto = this.state.fotos.find(foto => foto.id === idFoto);

    if(valorComentario === '')
    return;

    const novaLista = [...foto.comentarios, {
      id: valorComentario,
      login: 'Meu Usuário',
      texto: valorComentario
    }]

    const fotoAtualizada = {
      ...foto,
      comentarios: novaLista
    }

    const fotos = this.state.fotos.map(fotos => foto.id === fotos.id ? fotoAtualizada : fotos);
    this.setState({fotos: fotos});
    inputComentario.clear();
  }

  
  render() {              
    return (
      <FlatList style={styles.container}
        data= {this.state.fotos}
        keyExtractor = {item => item.id.toString()}
        renderItem={ ({item}) => 
            <Posts foto={item}
                  likeCallback={this.like.bind(this)}
                  comentarioCallback={this.adicionaComentario.bind(this)}/>
          }
        />    
    );
  }
}

const margem = Platform.OS === 'ios' ? 20 : 0; //consulta a plataforma que está sendo executado
const styles = StyleSheet.create({
  container:{
    marginTop: margem
  }
});

