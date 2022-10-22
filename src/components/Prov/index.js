import React from 'react'; 
import{
    View,
    Text,
    StyleSheet,
} from 'react-native';

import {Feather} from '@expo/vector-icons'

export default function Prov() {
 return(
   <View style={styles.container} >
    <View  style={styles.Button}>
  <Text style={styles.title}>
      <Feather href="" name="cloud" marginTop={4} size={32} color="#ec723b" />
             </Text>
       </View>

    <View  style={styles.play}>
    <Text style={styles.title}>
    <Feather name="save" marginTop={4} size={32} color="#ec723b" /></Text>
         </View>

<View  style={styles.paper}>
    <Text style={styles.title}>
    <Feather name="lock" marginTop={4} size={32} color="#ec723b" /></Text>
         </View>

<View  style={styles.prof}>
    <Text style={styles.title}>
    <Feather name="info" marginTop={4} size={32} color="#ec723b" /></Text>
         </View>

         <View  style={styles.link}>
    <Text style={styles.title}>
    <Feather name="link" marginTop={4} size={32} color="#ec723b" /></Text>
         </View> 
</View>
       );
}


const styles = StyleSheet.create({
    container:{
     backgroundColor:'#ec723b',
     flexDirection: 'row',
     justifyContent: 'space-between',
     paddingStart: 18,
     paddingEnd: 18,
     marginTop: 34,
     marginStart: 14,
     marginEnd: 14,
     borderRadius: 23,
     paddingBottom: 22,
     paddingTop: 22,
     zIndex: 99,
    },
    
    title:{
     fontSize: 18,
     fontWeight: 'bold',
     marginLeft: 14,
     marginRight: 14,
     marginTop: 24,
    },
    
    Button:{
      backgroundColor: '#fff',
      flexDirection: 'row',
     justifyContent: 'space-between',
     paddingStart: 2,
     paddingEnd: -12,
     marginTop: -4,
     marginStart: -7,
     marginEnd: 17,
     borderRadius: 13,
     paddingBottom: 54,
     paddingTop: 22,
     zIndex: 99,
    },

   play:{
   backgroundColor: '#fff',
   flexDirection: 'row',
   justifyContent: 'space-between',
   paddingStart: 3,
   paddingEnd: -14,
   marginTop: -4,
   marginStart: -9,
   marginEnd: 22,
   borderRadius: 13,
   borderColor: '#fff' / 1,
   paddingBottom: 54,
   paddingTop: 22,
   zIndex: 99,
},

paper:{
backgroundColor: '#fff',
flexDirection: 'row',
justifyContent: 'space-between',
paddingStart: -2,
paddingEnd: -14,
marginTop: -4,
marginStart: -15,
marginEnd: 90,
borderRadius: 13,
borderColor: '#fff' / 1,
paddingBottom: 22,
paddingTop: 22,
zIndex: 99,
 },

 prof:{
backgroundColor: '#fff',
flexDirection: 'row',
justifyContent: 'space-between',
paddingStart: -2,
paddingEnd: -14,
marginTop: -4,
marginStart: -15,
marginEnd: -112,
borderRadius: 13,
borderColor: '#fff' / 1,
paddingBottom: 22,
paddingTop: 22,
zIndex: 99,   
},

link:{
backgroundColor: '#fff',
flexDirection: 'row',
justifyContent: 'space-between',
paddingStart: -2,
paddingEnd: -10,
marginTop: -4,
marginLeft: -26,
marginStart: -20,
marginEnd: 90,
borderRadius: 13,
borderColor: '#fff' / 1,
paddingBottom: 22,
paddingTop: 22,
zIndex: 99,   
},

})