import React from 'react'
import {
    View,
    StyleSheet,
    Text,
    StatusBar,
    TouchableOpacity,
    NativeModules,
    Image
} from 'react-native';
 
import { Feather } from '@expo/vector-icons' 

const StatusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight +  22 : 64;

export default function Header({ name }){
    return (
         <View style={styles.container}>
         <View style={styles.content}>
        <Text style={styles.username}>{name} <Image style={styles.logow} 
             source={{
                uri:'https://th.bing.com/th/id/R.42ad0ebff37f0625e34df640dc4ae25d?rik=l0Vdv55uloo9jg&pid=ImgRaw&r=0',
             }}/></Text>
         <Text style={styles.logo}>
            <Image style={styles.logo1} 
             source={{
                uri:'https://www.pikpng.com/pngl/b/71-719039_bank-png-file-imagenes-de-bancos-png-clipart.png',
             }}/> Banco Digital </Text>
          
          <TouchableOpacity activeOpacity={0.9} style={styles.buttonUser}>
            <Feather name="list" size={27} color="#fff" />
           </TouchableOpacity>
        </View>
    </View>
    )
}
const styles = StyleSheet.create({
    container:{
        backgroundColor: '#26233e',
        paddingTop: StatusBarHeight,
        flexDirection: 'row',
        paddingStart: 16,
        paddingEnd: 16,
        paddingBottom: 44,

    },

    content:{
        flex: 1,
        alingItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    username:{
        fontSize: 18,
        color: '#FFF',
        fontWeight: 'bold',

    },
    buttonUser:{
        width: 44,
        height: 44,
        backgroundColor: 'rgba(255,255,255, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 44 / 2,
    },

    logo:{
        color:'#fff',
        fontSize: 12,
        fontWeight: 'bold',
        marginLeft: 14,
        height: 30,
        marginRight: 14,
        marginTop: 33,
        marginEnd: 77,

    },
 
    logow:{
        width: 20,
        height: 20,
        marginTop: -43,
        marginStart: -44,
    },

    logo1:{
        width: 20,
        height: 20,
        marginTop: -43,
        marginStart: -54,
    }
})