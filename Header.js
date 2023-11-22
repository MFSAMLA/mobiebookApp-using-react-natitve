import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Photo from './Photo';

export default function Header() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}> Welcome to Books Corner</Text>
        <Text style={styles.descripe}> "There is no friend as loyal as a book"</Text>
        <StatusBar style="auto" />
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      fontFamily: 'serif',
      fontSize: 25,
      color: 'blue'
    },
    descripe:{
      color:'#800000',
      fontSize:23,
    }
  });