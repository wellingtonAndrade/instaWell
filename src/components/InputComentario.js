
import React, { Component } from 'react';
import { 
  View, 
  Image,
  TouchableOpacity,
  TextInput,
  StyleSheet
} from 'react-native';

export default class InputComentario extends Component<{}> {
  
  

    render(){
      const {foto, comentarioCallback} = this.props;

      let valorComentario, inputComentario;

        return( 
            <View style={styles.novoComentario}>          
                <TextInput style={styles.input}
                    placeholder='Escreva o seu comentário...'
                    ref={input => inputComentario = input}
                    onChangeText={texto => valorComentario = texto}
                    underlineColorAndroid='transparent'/>

                <TouchableOpacity onPress={() => {
                    comentarioCallback(valorComentario, inputComentario, foto.id)
                    this.setState({valorComentario:''})}}> 
                    <Image style={styles.send} source={require('../../resources/imagens/send.png')}/>  
                </TouchableOpacity>
            </View>
        )
    }
}

const styles =  StyleSheet.create({
    novoComentario:{    
        flexDirection: 'row',    
        borderBottomWidth: 1,
        borderBottomColor: "#ddd",
        alignItems: 'center'
      },
      input:{ 
        flex: 1,   
        height: 40    
      },
      send:{
        width: 40,
        height: 40,
      }
});