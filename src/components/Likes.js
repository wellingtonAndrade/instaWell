import React, { Component } from 'react';
import {
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
  View,
  Text
} from 'react-native';

let widhtScreen = Dimensions.get('screen').width;


export default class Likes extends Component<{}> {
    

    carregaIcone(likeada){
        return likeada ? require('../../resources/imagens/s2-checked.png') : require('../../resources/imagens/s2.png')
    }

    curtidas(likers){
        {return likers.length > 0 ?
          <Text style={styles.curtidas}>
            {likers.length} {likers.length > 1 ? 'Curtidas': 'Curtida'} 
          </Text>  :
          null
        }
      }

    render(){
        const {foto, likeCallback} = this.props;
        return( 
            <View>
                <TouchableOpacity onPress={() => {likeCallback(foto.id)}}>
                    <Image source={this.carregaIcone(foto.likeada)}
                        style={styles.like}/>  
                </TouchableOpacity>
                {this.curtidas(foto.likers)}
            </View>             
        )
    }
}

const styles = StyleSheet.create({
    curtidas:{
        fontWeight: 'bold'
    },
    like:{
        marginRight:10, 
        width: 30, 
        height: 30,
        marginBottom: 10
      }
})