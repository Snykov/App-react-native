import { FlatList, StyleSheet, Text, View } from 'react-native';
import Header from '../../components/Header'
import Balance from '../../components/Balance';
import Movements from '../../components/Movements';
import Cards from '../../components/Cards';
import Prov from '../../components/Prov';
import Hcard from '../../components/Hcard';

const list = [
    {
        id: 1,
        label: 'Saque',
        value: '1.100,50',
        date: '10/09/2022',
        type: 0 //despesas
    },

    {
        id: 2,
        label: 'Saldo',
        value: '17.300,90',
        date: '8/09/2022',
        type: 1 // receita /entradas
    },

    {
        id: 3,
        label: 'Aluguel',
        value: '1.600,90',
        date: '10/08/2022',
        type: 1 // receita /entradas
    },
]
export default function Home() {
  return (
    <View style={styles.container}>
        <Header name="Julio Cesar"/>
       
       <Balance  saldo="27.800.90" gastos="-1.960,00"/>        
        <Prov />
        
       <Text style={styles.title}>Ultimas movimentaçoes</Text>   
       <FlatList 
          style={styles.list}   
          data={list}
          ReyExtractor={ (item) => String(item.id)}       
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => <Movements data={ item }/>}
       />
       <Cards />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },

 title:{
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 14,
    marginRight: 14,
    marginTop: 24,
 },
 
 card:{
  backgroundColor:'#1e2a32',
  borderRadius: 32,
  maxHeight: 84,
  flexDirection: 'row',
 },

 list:{
    marginStart: 14,
    marginEnd: 14,
 },

 aviso:{
  backgroundColor:'#1e2a32',
  flexDirection: 'row',
  justifyContent: 'space-between',
  paddingStart: 18,
  paddingEnd: 18,
  marginTop: -24,
  marginStart: 14,
  marginEnd: 14,
  borderRadius: 12,
  paddingBottom: 2,
  paddingTop: 2,
  zIndex: 99,
 },

});
