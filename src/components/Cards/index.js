import React from 'react'; 
import{
    View,
    Text,
    StyleSheet,
} from 'react-native';

import {Feather} from '@expo/vector-icons'

export default function Cards() {
 return(
   <View style={styles.container} >
           <View style={styles.grid}>
           <Feather />
         </View>  

         <View style={styles.grid}>
           <Feather name="grid" size={32} color="#fff" />
         </View>

         <View style={styles.Home}>
           <Feather name="user" size={32} color="#fff" />
         </View>

         <View style={styles.Star}>
           <Feather name="star" size={32} color="#fff" />
         </View>
       </View>
       );
}


const styles = StyleSheet.create({
    container:{
     backgroundColor:'#26233e',
     flexDirection: 'row',
     justifyContent: 'space-between',
     paddingStart: 28,
     paddingEnd: 22,
     marginTop: 20,
     top: -9,
     marginStart: 32,
     marginEnd: 44,
     borderRadius: 10,
     paddingBottom: 2,
     paddingTop: 10,
     zIndex: 99,
    },

    grid:{
      marginTop: -5,
      marginEnd: -22,  
    },

    Home:{
    marginTop: -5,
    marginEnd: -28,
    },

    Star:{
      marginTop: -5,
      marginEnd: 56,
      },
}) 