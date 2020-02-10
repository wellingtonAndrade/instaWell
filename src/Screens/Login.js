import React, { Component } from 'react';
import { TextInput, 
        View,
        StyleSheet,
        Dimensions,
        Button,
        Text,
        Image,
        AsyncStorage
    } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import FBLoginButton from './FBloginButton';


export default class Login extends Component<{}> {

    constructor() {
        super();
        this.state = {
            usuario:'',
            mensagem:''
        }
    }
    
    efetuaLogin(){
        const uri = "https://instalura-api.herokuapp.com/api/public/login";

        const requestInfo = { //requisição do tipo Post
            method:'POST',
            body: JSON.stringify({ //Converte para o padrão JSON
                login: this.state.usuario,
                senha: this.state.senha
            }),
            headers: new Headers({
                'content-type': 'application/json'
            })
        }

        fetch(uri, requestInfo).then(response => {
            if(response.ok)
                return response.text();

                throw new Error("Não foi possível realizar o Login!")
            }).then(token => {  //persistir com os dados na aplicação 
                    AsyncStorage.setItem('token', token);
                    AsyncStorage.setItem('usuario', this.state.usuario);
                    this.setState({mensagem: ''})
                    console.log('aqui chegou');
                    this.props.navigation.navigate('Feed');
                }).catch(e => 
                    this.setState({mensagem: e.message})
                )        
    }

    navigateToFeed(){
        console.log("VAI PRO FEED FI");
        navigation.navigate('Feed');
    }
    
    render(){
        return(
            <View style={styles.container}>
                <Image style={styles.logo} source={require("../../resources/imagens/instaWell-logo.png")}/>                
                <Text style={styles.titulo}>INSTAWELL</Text>

                <TextInput style={styles.input} placeholder="Usuário..." 
                    onChangeText={texto => this.setState({usuario: texto})}
                    autoCapitalize="none"/>
                <TextInput style={styles.input} placeholder="Senha..."
                    onChangeText={texto => this.setState({senha: texto})}
                    secureTextEntry={true}/>

                <Button title="Login" style={styles.login} onPress={this.efetuaLogin.bind(this)}/>
                <FBLoginButton style={styles.FBlogin}/>
                <Text style={styles.mensagemErro}>
                    {this.state.mensagem}
                </Text>      
            </View>
        )
    }
}

let widhtScreen = Dimensions.get('screen').width;
const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFF'
    },
    logo:{
        width: 100, 
        height: 100,
    },
    titulo:{    
        fontSize: 20,
        fontWeight: "bold"        
    },
    input:{
        borderBottomWidth: 1,
        borderBottomColor: "#ddd",
        textAlign: "center",
        width: widhtScreen * 0.8,
        height: 50,
        marginBottom: 10
    },
    login:{
        marginVertical: 30
    }, 
    mensagemErro:{
        marginTop: 15,
        color: '#e74c3c'
    },
    FBlogin:{
        flex:2
    }
});